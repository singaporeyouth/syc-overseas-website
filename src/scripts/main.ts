// Interaction layer — adapted from the original HTML Kit main.js.
// All features are progressive-enhancement only; no data is ever sent anywhere.

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

  // --- back to top ---
  const topBtn = document.getElementById('backToTop');
  if (topBtn) {
    const update = () => topBtn.classList.toggle('is-visible', window.scrollY > 400);
    window.addEventListener('scroll', update, { passive: true });
    update();
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // --- site search dialog ---
  const search = document.getElementById('siteSearch') as HTMLElement | null;
  const openSearch = document.getElementById('openSearch');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = document.getElementById('siteSearchInput') as HTMLInputElement | null;
  const open = () => {
    search?.classList.add('is-open');
    if (search) search.style.display = 'flex';
    searchInput?.focus();
  };
  const close = () => {
    search?.classList.remove('is-open');
    if (search) search.style.display = 'none';
    if (searchInput) searchInput.value = '';
    on<HTMLElement>('.search-result', (r) => (r.style.display = ''));
  };
  openSearch?.addEventListener('click', open);
  closeSearch?.addEventListener('click', close);
  search?.addEventListener('click', (e) => {
    if (e.target === search) close();
  });
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    on<HTMLElement>('.search-result', (r) => {
      const term = r.getAttribute('data-search-term') || '';
      r.style.display = !q || term.toLowerCase().includes(q) ? '' : 'none';
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !/INPUT|TEXTAREA/.test((document.activeElement as HTMLElement)?.tagName || '')) {
      e.preventDefault();
      open();
    }
    if (e.key === 'Escape') close();
  });

  // --- card filters (data-filter on buttons, data-filter-value on cards) ---
  on<HTMLButtonElement>('[data-filter]', (btn) => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-filter-group');
      const value = btn.getAttribute('data-filter') || 'all';
      const scope = group ? document.querySelector(`[data-filter-scope="${group}"]`) : document;
      if (!scope) return;
      const btnSel = group ? `[data-filter][data-filter-group="${group}"]` : '[data-filter]';
      document.querySelectorAll<HTMLButtonElement>(btnSel).forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      scope.querySelectorAll<HTMLElement>('[data-filter-value]').forEach((card) => {
        const v = card.getAttribute('data-filter-value') || '';
        (card as HTMLElement).style.display = value === 'all' || v.split(' ').includes(value) ? '' : 'none';
      });
    });
  });

  // --- contact form: NEVER submits; only prepares a local draft copy ---
  const form = document.getElementById('enquiryForm') as HTMLFormElement | null;
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const data = new FormData(form);
      const lines = [
        'SYC Partnership Enquiry (DRAFT — NOT SENT)',
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Organisation: ${data.get('organisation') || ''}`,
        `Topic: ${data.get('topic') || ''}`,
        '',
        String(data.get('message') || ''),
      ];
      const draft = lines.join('\n');
      try {
        await navigator.clipboard.writeText(draft);
      } catch {
        /* clipboard may be blocked; draft still shown as a local preview */
      }
      const out = document.getElementById('draftOutput');
      if (out) {
        out.hidden = false;
        const pre = out.querySelector('pre');
        if (pre) pre.textContent = draft;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    });
  }
})();
