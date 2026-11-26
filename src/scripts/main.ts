// Interaction layer — adapted from the original HTML Kit main.js.
// Progressive enhancement only. The enquiry form hands off to the visitor's
// email client via mailto; nothing is transmitted from this website itself.

(function () {
  function on<T extends Element>(sel: string, fn: (el: T) => void) {
    document.querySelectorAll<T>(sel).forEach(fn);
  }

  // --- mobile navigation ---
  const menuToggle = document.getElementById('menuToggle') as HTMLButtonElement | null;
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    on<HTMLAnchorElement>('#navLinks a', (a) =>
      a.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // --- generic popover dropdowns (language switcher + "More" nav) ---
  function bindDropdown(dropdownId: string, toggleId: string) {
    const dd = document.getElementById(dropdownId);
    const toggle = document.getElementById(toggleId);
    if (!dd || !toggle) return;
    const close = () => {
      dd.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !dd.classList.contains('is-open');
      // close any other open dropdown first
      document.querySelectorAll('.lang-dd.is-open, .nav-more.is-open').forEach((other) => {
        if (other !== dd) {
          other.classList.remove('is-open');
          const t = other.querySelector('[aria-expanded]');
          t?.setAttribute('aria-expanded', 'false');
        }
      });
      dd.classList.toggle('is-open', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
    });
    document.addEventListener('click', (e) => {
      if (dd && !dd.contains(e.target as Node)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }
  bindDropdown('langDropdown', 'langToggle');
  bindDropdown('moreDropdown', 'moreToggle');

  // --- back to top ---
  const topBtn = document.getElementById('backToTop');
  if (topBtn) {
    const update = () => topBtn.classList.toggle('is-visible', window.scrollY > 400);
    window.addEventListener('scroll', update, { passive: true });
    update();
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // --- card filters: active state + result count + empty state + hide empty categories ---
  // data-filter-value may be a single region ("Middle East") or space-separated
  // tokens; match either without splitting a multi-word value into pieces.
  const matches = (raw: string, value: string) => raw === value || raw.split(' ').includes(value);
  function updateFilterMeta(group: string | null, scope: Element | null, value: string) {
    if (!group || !scope) return;
    const cards = Array.from(scope.querySelectorAll<HTMLElement>('[data-filter-value]'));
    const visible = cards.filter((card) => {
      const v = card.getAttribute('data-filter-value') || '';
      return value === 'all' || matches(v, value);
    }).length;
    const meta = document.querySelector(`[data-filter-meta="${group}"]`);
    if (meta) meta.textContent = `${meta.getAttribute('data-showing-prefix') || ''} ${visible} ${meta.getAttribute('data-results-suffix') || ''}`.replace(/\s+/g, ' ').trim();
    const empty = document.querySelector<HTMLElement>(`[data-filter-empty="${group}"]`);
    if (empty) empty.hidden = visible !== 0;
    // Hide filter buttons that have no matching cards (keep "all").
    const btnSel = `[data-filter][data-filter-group="${group}"]`;
    document.querySelectorAll<HTMLButtonElement>(btnSel).forEach((b) => {
      const v = b.getAttribute('data-filter') || 'all';
      if (v === 'all' || b.classList.contains('region-card')) return;
      const count = cards.filter((card) => matches(card.getAttribute('data-filter-value') || '', v)).length;
      b.hidden = count === 0;
    });
  }
  on<HTMLButtonElement>('[data-filter]', (btn) => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-filter-group');
      const value = btn.getAttribute('data-filter') || 'all';
      const scope = (group ? document.querySelector(`[data-filter-scope="${group}"]`) : document) as Element | null;
      if (!scope) return;
      const btnSel = group ? `[data-filter][data-filter-group="${group}"]` : '[data-filter]';
      document.querySelectorAll<HTMLButtonElement>(btnSel).forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      scope.querySelectorAll<HTMLElement>('[data-filter-value]').forEach((card) => {
        const v = card.getAttribute('data-filter-value') || '';
        (card as HTMLElement).style.display = value === 'all' || matches(v, value) ? '' : 'none';
      });
      updateFilterMeta(group, scope, value);
    });
  });
  // Initialise: hide empty categories + set "all" count, without requiring a click.
  on<HTMLElement>('[data-filter-scope]', (scope) => {
    const group = scope.getAttribute('data-filter-scope');
    if (group) updateFilterMeta(group, scope, 'all');
  });

  // --- Country Teams directory: search + region filter + result count + load more + empty state ---
  on<HTMLElement>('[data-td-root]', (root) => {
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-td-card]'));
    if (!cards.length) return;
    const input = root.querySelector<HTMLInputElement>('[data-td-input]');
    const meta = root.querySelector<HTMLElement>('[data-td-meta]');
    const empty = root.querySelector<HTMLElement>('[data-td-empty]');
    const loadWrap = root.querySelector<HTMLElement>('[data-td-loadmore-wrap]');
    const loadBtn = root.querySelector<HTMLButtonElement>('[data-td-loadmore]');
    const clearBtn = root.querySelector<HTMLButtonElement>('[data-td-clear]');
    const emptyClear = root.querySelector<HTMLButtonElement>('[data-td-empty-clear]');
    const regionBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-td-region-btn]'));

    const showingPrefix = root.getAttribute('data-showing-prefix') || '';
    const teamsWord = root.getAttribute('data-teams-word') || '';
    const membersWord = root.getAttribute('data-members-word') || '';
    const INITIAL = 12;

    let region = 'all';
    let expanded = false;

    const queryOf = () => (input?.value || '').trim().toLowerCase();

    const render = () => {
      const q = queryOf();
      const filtering = Boolean(q) || region !== 'all';
      let shownTeams = 0;
      let shownMembers = 0;
      let matched = 0;

      cards.forEach((card, i) => {
        const hay = (card.getAttribute('data-td-search') || '').toLowerCase();
        const cardRegion = card.getAttribute('data-td-region') || '';
        const regionOk = region === 'all' || cardRegion === region;
        const textOk = !q || hay.indexOf(q) !== -1;
        const match = regionOk && textOk;
        if (match) matched++;
        // Filtering/searching covers all matching countries (ignores the 12-card cap).
        const visible = match && (filtering || expanded || i < INITIAL);
        card.hidden = !visible;
        if (visible) {
          shownTeams++;
          shownMembers += Number(card.getAttribute('data-td-members') || '0');
        }
      });

      // Result count reflects the countries/members currently on screen.
      if (meta) {
        meta.textContent = [showingPrefix, shownTeams, teamsWord, '/', shownMembers, membersWord]
          .filter(Boolean).join(' ');
      }
      if (empty) empty.hidden = matched !== 0;
      if (loadWrap) loadWrap.hidden = filtering || expanded || matched <= INITIAL;
      if (clearBtn) clearBtn.hidden = !filtering;
      regionBtns.forEach((b) =>
        b.classList.toggle('active', (b.getAttribute('data-td-region-btn') || 'all') === region)
      );
    };

    input?.addEventListener('input', () => { expanded = false; render(); });
    regionBtns.forEach((b) => {
      b.addEventListener('click', () => {
        region = b.getAttribute('data-td-region-btn') || 'all';
        expanded = false;
        render();
      });
    });
    const clearAll = () => {
      if (input) input.value = '';
      region = 'all';
      expanded = false;
      render();
    };
    clearBtn?.addEventListener('click', clearAll);
    emptyClear?.addEventListener('click', clearAll);
    loadBtn?.addEventListener('click', () => { expanded = true; render(); });

    // Deep link from Global Network map: ?country=<English country name> pre-fills the search.
    try {
      const presetCountry = new URLSearchParams(window.location.search).get('country');
      if (presetCountry && input) {
        input.value = presetCountry;
        expanded = true;
      }
    } catch (_) { /* noop */ }

    render();
  });

  // --- explore-by-region cards: filter countries then scroll to the grid ---
  on<HTMLButtonElement>('.region-card', (btn) => {
    btn.addEventListener('click', () => {
      const countries = document.getElementById('countries');
      if (countries) countries.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });
  });

  // --- contact form: field validation, then hand off to the visitor's email client via mailto ---
  const form = document.getElementById('enquiryForm') as HTMLFormElement | null;
  if (form) {
    let i18n: Record<string, string> = {};
    try { i18n = JSON.parse(form.getAttribute('data-form-i18n') || '{}'); } catch (_) { /* noop */ }
    const contactEmail = form.getAttribute('data-contact-email') || 'contact@singaporeyouth.com';
    const partnershipEmail = form.getAttribute('data-partnership-email') || 'partner@singaporeyouth.com';
    const summary = form.querySelector<HTMLElement>('[data-form-summary]');
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]'));

    function messageFor(input: HTMLInputElement | HTMLTextAreaElement): string {
      const value = (input.value || '').trim();
      if (!value) return i18n.errRequired || '';
      if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return i18n.errEmail || '';
      if (input.tagName === 'TEXTAREA' && value.length < 10) return i18n.errMessage || '';
      return '';
    }
    function showError(input: HTMLInputElement | HTMLTextAreaElement, msg: string) {
      const field = input.closest<HTMLElement>('.field');
      if (!field) return;
      field.classList.toggle('field--invalid', Boolean(msg));
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      let err = field.querySelector<HTMLElement>('.field-error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'field-error';
        field.appendChild(err);
      }
      err.textContent = msg;
    }
    // Errors appear only after a field has been interacted with.
    fields.forEach((input) => {
      const validate = () => showError(input, messageFor(input));
      input.addEventListener('blur', validate);
      input.addEventListener('input', () => {
        if (input.closest('.field')?.classList.contains('field--invalid')) validate();
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (summary) summary.hidden = true;
      let firstInvalid: HTMLInputElement | HTMLTextAreaElement | undefined;
      for (const input of fields) {
        const msg = messageFor(input);
        showError(input, msg);
        if (msg && !firstInvalid) firstInvalid = input;
      }
      if (firstInvalid) {
        if (summary) {
          summary.textContent = i18n.errRequired || '';
          summary.hidden = false;
        }
        firstInvalid.focus();
        return false;
      }
      // Everything is valid — hand off to the visitor's own email client.
      // Nothing is transmitted by this website; the visitor sends the email.
      const val = (name: string) => (form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`)?.value || '').trim();
      const topicSelect = form.querySelector<HTMLSelectElement>('select[name="topic"]');
      const topicValue = topicSelect?.value || '';
      const topicLabel = topicSelect?.selectedOptions[0]?.textContent?.trim() || '';
      const recipient = topicValue === 'partnership' ? partnershipEmail : contactEmail;
      const subject = [i18n.subjectPrefix || 'Website enquiry', topicLabel].filter(Boolean).join(' — ');
      const body = [
        `${i18n.labelName || 'Name'}: ${val('name')}`,
        `${i18n.labelEmail || 'Email'}: ${val('email')}`,
        `${i18n.labelOrg || 'Organisation'}: ${val('organisation')}`,
        `${i18n.labelTopic || 'Topic'}: ${topicLabel}`,
        '',
        `${i18n.labelMessage || 'Message'}:`,
        val('message'),
      ].join('\n');
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return false;
    });
  }

  // --- world map: node click updates the detail panel (uses only real country fields) ---
  on<HTMLElement>('[data-map-scope]', (scope) => {
    let nodes: Array<{ name: string; country: string; region: string; note: string; photo: string; representative: boolean }> = [];
    try { nodes = JSON.parse(scope.getAttribute('data-nodes') || '[]'); } catch (_) { /* noop */ }
    const repLabel = scope.getAttribute('data-representative-label') || 'Representative image';
    const buttons = Array.from(scope.querySelectorAll<HTMLButtonElement>('[data-map-node]'));
    const detail = scope.querySelector<HTMLElement>('[data-map-detail]');
    if (!detail || !nodes.length) return;
    const elName = detail.querySelector<HTMLElement>('[data-detail-name]');
    const elRegion = detail.querySelector<HTMLElement>('[data-detail-region]');
    const elNote = detail.querySelector<HTMLElement>('[data-detail-note]');
    const elTeam = detail.querySelector<HTMLAnchorElement>('[data-detail-team]');
    const elMedia = detail.querySelector<HTMLElement>('.map-detail-media');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-map-node'));
        const node = nodes[idx];
        if (!node) return;
        buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
        if (elName) elName.textContent = node.name;
        if (elRegion) elRegion.textContent = node.region;
        if (elNote) elNote.textContent = node.note;
        if (elTeam && node.country) {
          const u = new URL(elTeam.href, window.location.href);
          u.searchParams.set('country', node.country);
          elTeam.href = u.toString();
        }
        if (elMedia) {
          if (node.photo) {
            elMedia.classList.remove('card-media--pending');
            let img = elMedia.querySelector<HTMLImageElement>('img[data-detail-photo]');
            if (!img) {
              elMedia.innerHTML = '<img alt="" loading="lazy" data-detail-photo /><span class="media-representative" data-detail-representative hidden></span>';
              img = elMedia.querySelector('img');
            }
            if (img) { img.src = node.photo; img.alt = `${node.name} — ${node.representative ? repLabel : ''}`; }
            const rep = elMedia.querySelector<HTMLElement>('[data-detail-representative]');
            if (rep) { rep.textContent = node.representative ? repLabel : ''; rep.hidden = !node.representative; }
          } else {
            elMedia.classList.add('card-media--pending');
            elMedia.innerHTML = '<div class="media-pending"><svg class="icon"><use href="#i-globe"></use></svg></div>';
          }
        }
      });
    });
  });

  // --- restrained scroll reveal + hero parallax (progressive enhancement) ---
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const revealSel = '.section-head, .card, .mission-card, .trust-card, .platform-card, .timeline-step, .person-card, .country-card, .story-card, .partner-tile, .ai-feature, .detail-panel, .faq-item, .bottom-cta .container, .split-feature';
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    on<HTMLElement>(revealSel, (el) => {
      // Team member cards stay always visible; reveal animation can hide
      // below-the-fold members (opacity:0) until scroll, showing only 3 of 6.
      if (el.classList.contains('card--person')) return;
      el.classList.add('reveal');
      io.observe(el);
    });

    const parallaxImgs = document.querySelectorAll<HTMLElement>('.hero-media img, .hero-visual img');
    if (parallaxImgs.length) {
      let ticking = false;
      const applyParallax = () => {
        const offset = Math.min(window.scrollY * 0.06, 26);
        parallaxImgs.forEach((img) => img.style.setProperty('--parallax', `${offset.toFixed(1)}px`));
        ticking = false;
      };
      window.addEventListener(
        'scroll',
        () => {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(applyParallax);
          }
        },
        { passive: true }
      );
    }
  }
})();
