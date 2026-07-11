document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) {
    return;
  }

  Curio.setReady();

  const groupSubjects = [
    {
      glyph: '∑',
      tag: 'Klasy 6–8 • stacjonarnie • grupy 4–8 os.',
      name: 'Matematyka do egzaminu',
      desc: 'Pełny zakres CKE — egzamin ósmoklasisty i matura podstawowa. Testy próbne, strategie na czas i typowe pułapki egzaminacyjne. Nasz główny i najdojrzalszy produkt.',
    },
    {
      glyph: 'FR',
      tag: 'Podstawówka • liceum • matura • B2',
      name: 'Język francuski',
      desc: 'Zajęcia grupowe do 6 osób. Konwersacje, gramatyka i realne użycie języka — od podstawówki przez liceum aż po maturę i egzamin B2.',
    },
    {
      glyph: '∑ EN',
      tag: 'Podstawówka (kl. 4–8) • liceum',
      name: 'Matematyka po angielsku',
      desc: 'Pełny program matematyczny prowadzony w całości po angielsku. Dla uczniów szkół dwujęzycznych, programu IB i tych, którzy chcą rozwijać oba języki jednocześnie.',
    },
    {
      glyph: '★',
      tag: 'Każdy wiek • wstęp zależy od grupy',
      name: 'Matematyka dla mistrzów',
      desc: 'Wychodzimy poza szkolny materiał — matematyka, która faktycznie się przydaje. Teoria, praktyka i zadania konkursowe w jednym. Poziom grupy ważniejszy niż klasa.',
    },
    {
      glyph: 'ARK',
      tag: 'Klasy 7–8 • kl. 4 lic. • weekendy',
      name: 'Maraton egzaminacyjny',
      desc: 'Weekendowe sesje z przerabianiem arkuszy CKE pod okiem nauczyciela. Prawdziwe zadania, realne warunki — żeby egzamin nie był niespodzianką.',
      comingSoon: true,
    },
  ];

  const individualSubjects = [
    {
      glyph: 'φ',
      tag: 'Klasy 8 • liceum • do matury',
      name: 'Fizyka',
      desc: 'Zrozumieć, dlaczego świat działa tak, jak działa. Dużo eksperymentu myślowego i realnych przykładów.',
    },
    {
      glyph: '{ }',
      tag: 'Klasy 4–8 • liceum',
      name: 'Informatyka',
      desc: 'Python, logika programowania i myślenie algorytmiczne. Uczniowie budują własne projekty od podstaw.',
    },
    {
      glyph: '∑+',
      tag: 'Liceum • do matury rozszerzonej',
      name: 'Matematyka rozszerzona',
      desc: 'Przygotowanie do matury rozszerzonej — analizy, kombinatoryka, rachunek prawdopodobieństwa i zadania olimpijskie.',
    },
  ];

  const steps = [
    { n: '1', title: 'Diagnoza', body: 'Bezpłatne spotkanie — sprawdzamy, gdzie uczeń jest naprawdę.' },
    { n: '2', title: 'Plan', body: 'Konkretny plan na semestr, dopasowany do celu i tempa.' },
    { n: '3', title: 'Zajęcia', body: 'Kameralnie, do 8 osób. Regularnie, z zadaniami między spotkaniami.' },
    { n: '4', title: 'Raport', body: 'Rodzic dostaje krótkie podsumowanie postępów — bez domysłów.' },
  ];

  const nav = [
    { label: 'Zajęcia', href: '#oferta', current: true },
    { label: 'Opinie', href: 'Curio.dc.html#opinie' },
    { label: 'Pakiety', href: 'Pakiety.dc.html' },
    { label: 'Kadra', href: 'Kadra.dc.html' },
    { label: 'Lokalizacja', href: 'Curio.dc.html#lokalizacja' },
    { label: 'Kontakt', href: 'Kontakt.dc.html' },
  ];

  const subjectCard = (item) => `
    <article class="card">
      ${item.comingSoon ? '<span class="badge--coming-soon">Coming soon</span>' : ''}
      <div class="feature-index">${Curio.escapeHtml(item.glyph)}</div>
      <p class="card__tag">${Curio.escapeHtml(item.tag)}</p>
      <h3 class="feature-name">${Curio.escapeHtml(item.name)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.desc)}</p>
    </article>`;

  const individualCard = (item) => `
    <article class="card">
      <div class="feature-index">${Curio.escapeHtml(item.glyph)}</div>
      <p class="card__tag">${Curio.escapeHtml(item.tag)}</p>
      <h3 class="feature-name">${Curio.escapeHtml(item.name)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.desc)}</p>
      <p class="feature-copy" style="margin-top:10px; font-size:0.85em; opacity:0.65;">Cena i format (grupowo / indywidualnie / zdalnie) do uzgodnienia z nauczycielem.</p>
    </article>`;

  const stepCard = (item) => `
    <article class="card">
      <div class="feature-index">${Curio.escapeHtml(item.n)}</div>
      <h3 class="feature-name">${Curio.escapeHtml(item.title)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.body)}</p>
    </article>`;

  app.innerHTML = `
    <div class="curio-app curio-subpage" data-curio-fx="constellation">
      ${Curio.shell({ brandHref: 'Curio.dc.html', navLinks: nav, ctaHref: 'Kontakt.dc.html' })}
      <main>
        <section class="hero">
          <div class="container hero-grid">
            <div>
              <div class="hero-badge">Oferta zajęć • CURIO</div>
              <h1 class="hero-title">Zajęcia, które tłumaczą świat po ludzku.</h1>
              <p class="hero-lead">Matematyka, fizyka, informatyka i języki — prowadzimy grupowo i indywidualnie, stacjonarnie w Warszawie. Każdy przedmiot z planem, regularnym feedbackiem i kontaktem z rodzicem.</p>
              <div class="hero-actions">
                ${Curio.button('Umów bezpłatną lekcję', 'Kontakt.dc.html', 'primary')}
                ${Curio.button('Zobacz pakiety', 'Pakiety.dc.html', 'outline')}
              </div>
            </div>
            <div class="hero-visual">
              ${Curio.placeholder('zdjęcie — zajęcia / uczeń', 'placeholder--hero')}
              <div class="badge-card">
                <p class="badge-card__eyebrow">Nowości w ofercie</p>
                <p class="badge-card__title">Français & Math EN</p>
                <p class="badge-card__copy">Nowe grupy — język francuski i matematyka po angielsku. Zapisy otwarte.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" class="section section--band">
          <div class="container">
            <p class="eyebrow">Zajęcia grupowe</p>
            <h2 class="section-title">Stacjonarnie w Warszawie — do 8 osób w grupie.</h2>
            <div class="grid grid--5" style="margin-top:28px;">
              ${groupSubjects.map(subjectCard).join('')}
            </div>
          </div>
        </section>

        <section id="indywidualne" class="section" data-curio-fx="net">
          <div class="container">
            <div class="section-head">
              <div>
                <p class="eyebrow">Zajęcia indywidualne i dodatkowe</p>
                <h2 class="section-title">Format i cena — do ustalenia z nauczycielem.</h2>
              </div>
            </div>
            <p class="section-copy" style="margin-bottom:28px;">Fizyka, informatyka i matematyka rozszerzona prowadzone są w zależności od potrzeb — grupowo lub indywidualnie, stacjonarnie lub zdalnie. Cena ustalana indywidualnie.</p>
            <div class="grid grid--3">
              ${individualSubjects.map(individualCard).join('')}
            </div>
          </div>
        </section>

        <section class="section section--band">
          <div class="container">
            <p class="eyebrow">Jak pracujemy</p>
            <h2 class="section-title">Cztery kroki od pierwszego spotkania do spokoju rodzica.</h2>
            <div class="grid grid--4" style="margin-top:28px;">
              ${steps.map(stepCard).join('')}
            </div>
          </div>
        </section>

        <section id="kontakt" class="section">
          <div class="container">
            <div class="cta-band">
              <p class="eyebrow">Start</p>
              <h2 class="section-title">Sprawdźmy, czego potrzebuje uczeń.</h2>
              <p class="section-copy">Napisz do nas, a wrócimy z propozycją terminu i formatu zajęć. Pierwsza lekcja jest bezpłatna.</p>
              <div class="hero-actions">
                ${Curio.button('Umów termin →', 'Kontakt.dc.html', 'light')}
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
