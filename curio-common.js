window.CurioCommon = {
  escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[character]));
  },

  logo() {
    return `<svg width="196" height="52" viewBox="0 0 196 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(0, 4) scale(1.1)">
        <circle cx="20" cy="20" r="13.5" stroke="#10213e" stroke-width="2.4" fill="none"/>
        <line x1="20" y1="2.5" x2="20" y2="9.5" stroke="#10213e" stroke-width="2.4" stroke-linecap="round"/>
        <line x1="20" y1="30.5" x2="20" y2="37.5" stroke="#10213e" stroke-width="2.4" stroke-linecap="round"/>
        <line x1="2.5" y1="20" x2="9.5" y2="20" stroke="#10213e" stroke-width="2.4" stroke-linecap="round"/>
        <line x1="30.5" y1="20" x2="37.5" y2="20" stroke="#10213e" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="20" cy="20" r="4.62" fill="#2f6bff"/>
      </g>
      <text x="122" y="35" font-family="'Newsreader', Georgia, serif" font-size="26" font-weight="500" letter-spacing="8.5" fill="#10213e" text-anchor="middle">CURIO</text>
      <text x="122" y="47" font-family="system-ui, -apple-system, sans-serif" font-size="7.5" letter-spacing="1.1" fill="#566c93" text-anchor="middle">FEED THE CURIOUS MIND</text>
    </svg>`;
  },

  shell(options = {}) {
    const navLinks = options.navLinks || [];
    const brandHref = options.brandHref || 'Curio.dc.html';
    const ctaHref = options.ctaHref || 'Kontakt.dc.html';
    const navMarkup = navLinks.map((link) => {
      const current = link.current ? ' aria-current="page"' : '';
      return `<a href="${link.href}"${current}>${this.escapeHtml(link.label)}</a>`;
    }).join('');

    const mobileLinks = navLinks.map((link, i) => {
      const current = link.current ? ' aria-current="page"' : '';
      const num = String(i + 1).padStart(2, '0');
      return `<a href="${link.href}"${current} data-nav-close><span>${this.escapeHtml(link.label)}</span><span class="mobile-menu__num">${num}</span></a>`;
    }).join('');

    return [
      '<header class="site-header">',
      '<div class="container site-header__inner">',
      `<a class="site-brand" href="${brandHref}" aria-label="CURIO - strona główna">`,
      this.logo(),
      '</a>',
      '<nav class="site-nav" aria-label="Główna nawigacja">',
      navMarkup,
      '</nav>',
      '<div class="site-header__actions">',
      `<a class="button button--primary" href="${ctaHref}">Bezpłatna lekcja</a>`,
      '<button class="nav-toggle" type="button" data-nav-toggle aria-label="Otwórz menu" aria-expanded="false" aria-controls="mobile-menu">',
      '<span></span><span></span><span></span>',
      '</button>',
      '</div>',
      '</div>',
      '</header>',
      // ── Pełnoekranowe menu mobilne ──
      '<div class="mobile-menu" id="mobile-menu">',
      '<div class="mobile-menu__backdrop" data-nav-close></div>',
      '<div class="mobile-menu__panel">',
      '<div class="mobile-menu__head">',
      `<a class="mobile-menu__brand" href="${brandHref}" data-nav-close aria-label="CURIO - strona główna">`,
      '<svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="13.5" stroke="#ffffff" stroke-width="2.4"/><path d="M20 3v6M20 31v6M3 20h6M31 20h6" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/><circle cx="20" cy="20" r="4.2" fill="#2f6bff"/></svg>',
      '<span>CURIO</span>',
      '</a>',
      '<button class="mobile-menu__close" type="button" data-nav-close aria-label="Zamknij menu">✕</button>',
      '</div>',
      `<nav class="mobile-menu__nav" aria-label="Menu mobilne">${mobileLinks}</nav>`,
      '<div class="mobile-menu__foot">',
      `<a class="button button--primary button--full" href="${ctaHref}" data-nav-close>Umów bezpłatną lekcję</a>`,
      '<p class="mobile-menu__contact">biuro@e-curio.pl</p>',
      '</div>',
      '</div>',
      '</div>',
      // ── Przyklejony dolny pasek CTA (mobile) ──
      '<div class="mobile-cta-bar" aria-hidden="false">',
      '<span class="mobile-cta-bar__label">Pierwsza lekcja<br><em>za darmo</em></span>',
      `<a class="button button--primary" href="${ctaHref}">Umów lekcję</a>`,
      '</div>',
    ].join('');
  },

  footer() {
    return [
      '<footer class="footer">',
      '<div class="container footer__inner">',
      '<div class="footer__top">',
      '<div>',
      '<a class="site-brand" href="Curio.dc.html">',
      this.logo(),
      '</a>',
      '</div>',
      '<div>',
      '<p class="footer__title">Strona</p>',
      '<div class="footer__links">',
      '<a href="Zajecia.dc.html">Zajęcia</a>',
      '<a href="Curio.dc.html#opinie">Opinie</a>',
      '<a href="Pakiety.dc.html">Pakiety</a>',
      '<a href="Kadra.dc.html">Kadra</a>',
      '<a href="Kontakt.dc.html">Kontakt</a>',
      '</div>',
      '</div>',
      '<div>',
      '<p class="footer__title">Kontakt</p>',
      '<div class="footer__links">',
      '<span>Warszawa</span>',
      '<span>biuro@e-curio.pl</span>',
      '<span>+48 519 841 931</span>',
      '<span>+48 606 317 505</span>',
      '</div>',
      '</div>',
      '<div>',
      '<p class="footer__title">Dokumenty</p>',
      '<div class="footer__links">',
      '<a href="Polityka-prywatnosci.dc.html">Polityka prywatności</a>',
      '</div>',
      '</div>',
      '</div>',
      '<div class="footer__bar">',
      '<span>© 2026 CURIO. Wszystkie prawa zastrzeżone.</span>',
      '<span>Warszawa • zajęcia i kursy</span>',
      '</div>',
      '</div>',
      '</footer>',
    ].join('');
  },

  stars(rating = 5) {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);
    return '★'.repeat(full) +
      (hasHalf ? '<span class="star--half">★</span>' : '') +
      (empty > 0 ? `<span class="star--empty">${'★'.repeat(empty)}</span>` : '');
  },

  button(label, href, variant = 'primary') {
    return `<a class="button button--${variant}" href="${href}">${this.escapeHtml(label)}</a>`;
  },

  placeholder(caption, modifier = 'placeholder--hero') {
    return `<div class="placeholder ${modifier}" data-caption="${this.escapeHtml(caption)}"></div>`;
  },

  setReady() {
    document.documentElement.classList.add('js-ready');
  },

  initCounters(root) {
    const els = root.querySelectorAll('[data-count-target]');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.countTarget;
        const prefix = el.dataset.countPrefix || '';
        const suffix = el.dataset.countSuffix || '';
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });
    els.forEach((el) => observer.observe(el));
  },

  initParticles(container) {
    if (!container) return;
    const existing = container.style.position;
    if (!existing || existing === 'static') container.style.position = 'relative';
    const count = 9;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'curio-particle';
      const size = 3 + Math.random() * 5;
      p.style.cssText = [
        `width:${size}px`,
        `height:${size}px`,
        `left:${5 + Math.random() * 88}%`,
        `top:${5 + Math.random() * 88}%`,
        `--dur:${7 + Math.random() * 10}s`,
        `--delay:${-(Math.random() * 14)}s`,
        `--tx:${(Math.random() - 0.5) * 64}px`,
        `--ty:${-18 - Math.random() * 44}px`,
        `--op:${(0.07 + Math.random() * 0.09).toFixed(2)}`,
      ].join(';');
      container.appendChild(p);
    }
  },

  initTyped(selector, words, opts = {}) {
    const el = document.querySelector(selector);
    if (!el || !words.length) return;
    const typeSpeed = opts.typeSpeed || 78;
    const deleteSpeed = opts.deleteSpeed || 48;
    const pauseType = opts.pauseType || 2400;
    const pauseDelete = opts.pauseDelete || 360;

    // Zmierz najdłuższe słowo i zablokuj szerokość — koniec skoków layoutu
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none;';
    probe.style.font = getComputedStyle(el).font;
    probe.style.fontStyle = 'italic';
    document.body.appendChild(probe);
    let maxW = 0;
    words.forEach((w) => { probe.textContent = w; maxW = Math.max(maxW, probe.offsetWidth); });
    document.body.removeChild(probe);
    el.style.display = 'inline-block';
    el.style.minWidth = maxW + 'px';

    const wordSpan = document.createElement('span');
    wordSpan.className = 'typed-word';
    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    el.innerHTML = '';
    el.appendChild(wordSpan);
    el.appendChild(cursor);

    let wi = 0;
    let ci = 0;
    let deleting = false;
    let visible = true;
    let timer = null;

    // Zatrzymaj gdy element poza ekranem
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    }, { threshold: 0.1 }).observe(el);

    const tick = () => {
      if (!visible) { timer = setTimeout(tick, 400); return; }
      const word = words[wi];
      if (deleting) {
        ci--;
        wordSpan.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; timer = setTimeout(tick, pauseDelete); }
        else timer = setTimeout(tick, deleteSpeed);
      } else {
        ci++;
        wordSpan.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; timer = setTimeout(tick, pauseType); }
        else timer = setTimeout(tick, typeSpeed);
      }
    };
    tick();
  },

  initAnimations(root) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        card.classList.add('is-visible');
        card.addEventListener('transitionend', () => {
          card.style.transitionDelay = '';
        }, { once: true });
        observer.unobserve(card);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    root.querySelectorAll('.grid').forEach((grid) => {
      grid.querySelectorAll('.card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.07}s`;
        observer.observe(card);
      });
    });

    root.querySelectorAll('.card').forEach((card) => {
      if (card.closest('.grid') || card.closest('.marquee')) return;
      observer.observe(card);
    });
  },

  initMarquee(root) {
    const marquee = root.querySelector('[data-marquee]');
    if (!marquee) {
      return;
    }

    const track = marquee.querySelector('[data-marquee-track]');
    if (!track) {
      return;
    }

    marquee.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  },
};

// ── Nawigacja mobilna: otwieranie/zamykanie pełnoekranowego menu ──
(function () {
  const openMenu = () => {
    document.body.classList.add('nav-open');
    const toggle = document.querySelector('[data-nav-toggle]');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    document.body.classList.remove('nav-open');
    const toggle = document.querySelector('[data-nav-toggle]');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-nav-toggle]')) {
      event.preventDefault();
      document.body.classList.contains('nav-open') ? closeMenu() : openMenu();
    } else if (event.target.closest('[data-nav-close]')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) closeMenu();
  });
})();
