document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) {
    return;
  }

  Curio.setReady();

  const founders = [
    {
      name: 'Mateusz Szot',
      role: 'Współzałożyciel • matematyka',
      bio: 'Prezes BEST Warsaw, student inżynierii biomedycznej i trener piłki nożnej dla najmłodszych — w jednej osobie. Na boisku i przy tablicy robię to samo: szukam podejścia, które działa na konkretnego człowieka. Matematyki uczę od lat, z wyraźnymi wynikami.',
      photo: 'zdjecia/Mateusz-Szot.webp',
    },
    {
      name: 'Aleksander Zbyrasz',
      role: 'Współzałożyciel • informatyka & matematyka',
      bio: 'Na co dzień Hyperautomation Developer w Bosch i student informatyki na Politechnice Warszawskiej. Od 3 lat uczę matematyki i informatyki — od podstawówki po maturę, od równań po tworzenie gier. Po godzinach: kort tenisowy.',
      photo: 'zdjecia/Aleksander-Zbyrasz.png',
    },
  ];

  const tutors = [
    {
      name: 'Mateusz Szot',
      role: 'Prowadzący • matematyka',
      bio: 'Podobno ratowałem całą klasę przed każdą kartkówką, dziś tłumaczę tak, że nawet trudne zadania przestają straszyć.',
      photo: 'zdjecia/Mateusz-Szot.webp',
    },
    {
      name: 'Aleksander Zbyrasz',
      role: 'Prowadzący • informatyka & matematyka',
      bio: 'Rozkładam trudne tematy na proste kroki jak dobry algorytm, żeby uczniowie wychodzili z głową pełną pytań, nie stresu.',
      photo: 'zdjecia/Aleksander-Zbyrasz.png',
    },
    {
      name: 'Kinga',
      role: 'Prowadząca • język francuski',
      bio: 'Urodziłam się we Francji w Montpellier, uczyłam się w liceum francuskojęzycznym. Studiuję medycynę na Warszawskim Uniwersytecie Medycznym, ale moją pasją jest nauczanie uwielbiam pracować z dziećmi!',
      photo: 'zdjecia/Kinga_curio.PNG',
    },
  ];

  const values = [
    { n: '01', title: 'Ciekawość ponad ocenami', body: 'Uczymy myśleć, nie odtwarzać. Dobre oceny są skutkiem, nie celem.' },
    { n: '02', title: 'Kameralnie, po ludzku', body: 'Małe grupy i realna relacja. Znamy imiona, mocne i słabe strony.' },
    { n: '03', title: 'Uczciwie z rodzicem', body: 'Regularny, szczery raport. Bez koloryzowania i bez niespodzianek.' },
  ];

  const nav = [
    { label: 'Zajęcia', href: 'Zajecia.dc.html' },
    { label: 'Opinie', href: 'Curio.dc.html#opinie' },
    { label: 'Pakiety', href: 'Pakiety.dc.html' },
    { label: 'Kadra', href: '#kadra', current: true },
    { label: 'Lokalizacja', href: 'Curio.dc.html#lokalizacja' },
    { label: 'Kontakt', href: 'Kontakt.dc.html' },
  ];

  const founderCard = (item) => `
    <article class="card profile">
      ${item.photo
        ? `<img class="placeholder placeholder--photo" src="${Curio.escapeHtml(item.photo)}" alt="${Curio.escapeHtml(item.name)}">`
        : Curio.placeholder('foto', 'placeholder--photo')}
      <div>
        <h3 class="profile__name">${Curio.escapeHtml(item.name)}</h3>
        <p class="profile__role">${Curio.escapeHtml(item.role)}</p>
        <p class="profile__copy">${Curio.escapeHtml(item.bio)}</p>
      </div>
    </article>`;

  const tutorCard = (item) => `
    <article class="card tutor-card">
      ${item.photo
        ? `<div class="tutor-avatar"><img src="${Curio.escapeHtml(item.photo)}" alt="${Curio.escapeHtml(item.name)}"></div>`
        : `<div class="tutor-avatar tutor-avatar--initial" aria-hidden="true">${Curio.escapeHtml(item.name.charAt(0))}</div>`}
      <h3 class="feature-name">${Curio.escapeHtml(item.name)}</h3>
      <p class="card__tag">${Curio.escapeHtml(item.role)}</p>
      <p class="feature-copy">${Curio.escapeHtml(item.bio)}</p>
    </article>`;

  const valueCard = (item) => `
    <article class="card">
      <div class="feature-index">${Curio.escapeHtml(item.n)}</div>
      <h3 class="feature-name">${Curio.escapeHtml(item.title)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.body)}</p>
    </article>`;

  app.innerHTML = `
    <div class="curio-app curio-subpage">
      ${Curio.shell({ brandHref: 'Curio.dc.html', navLinks: nav, ctaHref: 'Kontakt.dc.html' })}
      <main>
        <section class="hero" data-curio-fx="constellation">
          <div class="container hero-grid">
            <div>
              <div class="hero-badge">Kadra • CURIO</div>
              <h1 class="hero-title">Ludzie, którzy uczą spokojnie i z energią.</h1>
              <p class="hero-lead">Zespół CURIO łączy specjalistów od przedmiotów ścisłych, języków i pracy z dziećmi. Wspólny mianownik: jasny plan, cierpliwość i wysoki standard prowadzenia zajęć.</p>
              <div class="hero-actions">
                ${Curio.button('Poznaj pakiety', 'Pakiety.dc.html', 'primary')}
                ${Curio.button('Zajęcia', 'Zajecia.dc.html', 'outline')}
              </div>
            </div>
            <div class="hero-visual">
              ${Curio.placeholder('zdjęcie — kadra', 'placeholder--hero')}
              <div class="badge-card">
                <p class="badge-card__eyebrow">Metodyka</p>
                <p class="badge-card__title">pytania zamiast presji</p>
                <p class="badge-card__copy">Stawiamy na rozumienie, nie na szybkie odpytywanie z materiału.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="kadra" class="section" style="background:#fff;">
          <div class="container">
            <p class="eyebrow">Założyciele</p>
            <h2 class="section-title">To oni ustawiają kierunek CURIO.</h2>
            <div class="grid grid--2" style="margin-top:28px;">
              ${founderCard(founders[0])}
              ${founderCard(founders[1])}
            </div>
          </div>
        </section>

        <section class="section" data-curio-fx="net">
          <div class="container">
            <p class="eyebrow">Prowadzący</p>
            <h2 class="section-title">Specjaliści od przedmiotów, które lubią robić „klik".</h2>
            <div class="grid grid--3" style="margin-top:28px;">
              ${tutors.map(tutorCard).join('')}
            </div>
          </div>
        </section>

        <section class="section section--band">
          <div class="container">
            <p class="eyebrow">Wartości</p>
            <h2 class="section-title">Jak myślimy o pracy z uczniami i rodzicami.</h2>
            <div class="grid grid--3" style="margin-top:28px;">
              ${values.map(valueCard).join('')}
            </div>
          </div>
        </section>

        <section id="kontakt" class="section">
          <div class="container">
            <div class="cta-band">
              <p class="eyebrow">Kontakt</p>
              <h2 class="section-title">Chcesz dobrać prowadzącego? Napisz do nas.</h2>
              <p class="section-copy">Opowiedz nam, z czym uczeń ma największy problem, a dobierzemy osobę i format pracy.</p>
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
});
