document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) {
    return;
  }

  Curio.setReady();

  const packages = [
    {
      tag: 'grupy 6–8 os. • stacjonarnie',
      name: 'Pakiet 5 spotkań',
      desc: 'Dobry start — sprawdzamy, czy format i tempo pasują do ucznia. Ważny 7 tygodni od zakupu.',
      price: '390',
      perks: [
        '5 × 90 min zajęć stacjonarnych',
        'Grupy 6–8 osób',
        'Feedback po każdej lekcji (Google Classroom)',
        'Notatka z lekcji od nauczyciela',
        'Rozmowa z rodzicem w pakiecie',
      ],
      cta: 'Wybierz pakiet 5',
    },
    {
      tag: 'grupy 6–8 os. • stacjonarnie',
      name: 'Pakiet 10 spotkań',
      desc: 'Główny produkt — stały termin, pełny cykl, widoczne wyniki. Ważny 14 tygodni od zakupu.',
      price: '690',
      perks: [
        '10 × 90 min zajęć stacjonarnych',
        'Stały termin w salce',
        'Grupy 6–8 osób',
        'Feedback po każdej lekcji (Google Classroom)',
        'Notatka z lekcji od nauczyciela',
        'Rozmowa z rodzicem w pakiecie',
      ],
      cta: 'Wybierz pakiet 10',
      featured: true,
    },
    {
      tag: 'format do uzgodnienia',
      name: 'Zajęcia dodatkowe',
      desc: 'Fizyka, informatyka, matematyka rozszerzona. Cena i format ustalane indywidualnie z nauczycielem.',
      priceLabel: 'Wycena indyw.',
      perks: [
        'Fizyka (klasa 8 → matura)',
        'Informatyka (klasy 4–8, liceum)',
        'Matematyka rozszerzona (matura)',
        'Format: grupowo lub 1:1',
        'Zajęcia stacjonarne lub zdalne',
      ],
      cta: 'Zapytaj o cenę',
    },
  ];

  const faq = [
    { q: 'Jak wygląda pierwsza lekcja?', a: 'Jest bezpłatna i niezobowiązująca. Sprawdzamy poziom ucznia, ustalamy cel i wspólnie dobieramy najlepszy pakiet.' },
    { q: 'Co zawiera cena pakietu?', a: 'Cena podawana jest za ucznia. W pakiecie: zajęcia stacjonarne, materiały, feedback po każdej lekcji w Google Classroom i notatka od nauczyciela dostępna dla rodzica.' },
    { q: 'Co jeśli uczeń opuści zajęcia?', a: 'Nieobecność zgłoszoną min. 24h wcześniej możemy odrobić w innym terminie. Bez zgłoszenia lekcja przepada.' },
    { q: 'Jak wygląda cena za zajęcia rozszerzone?', a: 'Fizyka, informatyka i matematyka rozszerzona wyceniane są indywidualnie — zależy od liczby osób, formatu i częstotliwości. Napisz do nas, a ustalimy szczegóły.' },
  ];

  const nav = [
    { label: 'Zajęcia', href: 'Zajecia.dc.html' },
    { label: 'Opinie', href: 'Curio.dc.html#opinie' },
    { label: 'Pakiety', href: '#pakiety', current: true },
    { label: 'Kadra', href: 'Kadra.dc.html' },
    { label: 'Lokalizacja', href: 'Curio.dc.html#lokalizacja' },
    { label: 'Kontakt', href: 'Kontakt.dc.html' },
  ];

  const packageCard = (item) => `
    <article class="card ${item.featured ? 'card--featured' : ''}">
      ${item.featured ? '<div class="card__badge">Najczęściej wybierany</div>' : ''}
      <p class="card__tag">${Curio.escapeHtml(item.tag)}</p>
      <h3 class="card__title">${Curio.escapeHtml(item.name)}</h3>
      <p class="card__text">${Curio.escapeHtml(item.desc)}</p>
      ${item.price
        ? `<div class="card__price"><strong>${Curio.escapeHtml(item.price)}</strong><span>zł / uczeń</span></div>`
        : `<div class="card__price"><strong>${Curio.escapeHtml(item.priceLabel)}</strong></div>`
      }
      <ul class="card__list">${item.perks.map((perk) => `<li>${Curio.escapeHtml(perk)}</li>`).join('')}</ul>
      <div class="card__footer">${Curio.button(item.cta, 'Kontakt.dc.html', item.featured ? 'primary' : 'outline')}</div>
    </article>`;

  const faqCard = (item) => `
    <details class="card">
      <summary>${Curio.escapeHtml(item.q)}</summary>
      <p class="feature-copy">${Curio.escapeHtml(item.a)}</p>
    </details>`;

  app.innerHTML = `
    <div class="curio-app curio-subpage">
      ${Curio.shell({ brandHref: 'Curio.dc.html', navLinks: nav, ctaHref: 'Kontakt.dc.html' })}
      <main>
        <section class="hero" data-curio-fx="constellation">
          <div class="container hero-grid">
            <div>
              <div class="hero-badge">Pakiety i cennik • CURIO</div>
              <h1 class="hero-title">Ceny jasne, bez ukrytych opłat.</h1>
              <p class="hero-lead">Pakiet 5 lub 10 spotkań — grupy 6–8 osób, stacjonarnie w Warszawie. Dla zajęć dodatkowych (fizyka, informatyka, matematyka rozszerzona) cena ustalana indywidualnie.</p>
              <div class="hero-actions">
                ${Curio.button('Umów bezpłatną lekcję', 'Kontakt.dc.html', 'primary')}
                ${Curio.button('Zobacz zajęcia', 'Zajecia.dc.html', 'outline')}
              </div>
            </div>
            <div class="hero-visual">
              ${Curio.placeholder('zdjęcie — pakiety / materiały', 'placeholder--hero')}
              <div class="badge-card">
                <p class="badge-card__eyebrow">Najczęściej wybierany</p>
                <p class="badge-card__title">Pakiet 10 spotkań</p>
                <p class="badge-card__copy">Stały termin, pełny cykl i widoczny postęp. 690 zł / uczeń.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pakiety" class="section section--band">
          <div class="container">
            <p class="eyebrow">Cennik</p>
            <h2 class="section-title">Dwa pakiety grupowe i zajęcia dodatkowe.</h2>
            <div class="grid grid--3" style="margin-top:28px;">
              ${packages.map(packageCard).join('')}
            </div>
            <p class="section-copy" style="margin-top:24px; font-size:0.9em; opacity:0.65;">Ceny podawane brutto. Płatność z góry przed pierwszą lekcją. Pakiet ważny od daty zakupu — nie od pierwszej lekcji. Odwołanie min. 24h wcześniej.</p>
          </div>
        </section>

        <section id="faq" class="section" data-curio-fx="curve">
          <div class="container">
            <p class="eyebrow">FAQ</p>
            <h2 class="section-title">Najczęstsze pytania przed startem.</h2>
            <div class="grid grid--2" style="margin-top:28px;">
              ${faq.map(faqCard).join('')}
            </div>
          </div>
        </section>

        <section id="kontakt" class="section section--band">
          <div class="container">
            <div class="cta-band">
              <p class="eyebrow">Start</p>
              <h2 class="section-title">Pierwsza lekcja jest za darmo.</h2>
              <p class="section-copy">Powiedz nam, czego szukasz, a wrócimy z propozycją najlepszego pakietu i terminu.</p>
              <div class="hero-actions">
                ${Curio.button('Napisz do nas →', 'Kontakt.dc.html', 'light')}
              </div>
            </div>
          </div>
        </section>
      </main>
      ${Curio.footer()}
    </div>
  `;
  Curio.initAnimations(app);
  Curio.initParticles(app.querySelector('#faq'));
});
