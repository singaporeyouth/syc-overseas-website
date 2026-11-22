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

  // --- contact form: validate and present a confirmation state ---
  const form = document.getElementById('enquiryForm') as HTMLFormElement | null;
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!form.reportValidity()) return;
      const out = document.getElementById('formSuccess');
      if (out) {
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      return false;
    });
  }

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
