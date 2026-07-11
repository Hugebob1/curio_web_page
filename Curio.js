document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) {
    return;
  }

  Curio.setReady();

  const testimonials = [
    { quote: 'Córka pierwszy raz sama siada do matematyki. Nie wierzyłam, że to możliwe.', author: 'Anna — mama Zosi, kl. 7', role: 'Rodzic CURIO', initial: 'A', rating: 5 },
    { quote: 'Zajęcia, po których dziecko opowiada, czego się nauczyło — a nie narzeka.', author: 'Marek — tata Kuby', role: 'Rodzic CURIO', initial: 'M', rating: 5 },
    { quote: 'Z trójki na piątkę w jeden semestr. Ale ważniejsze, że wróciła ciekawość.', author: 'Joanna — mama Igi', role: 'Rodzic CURIO', initial: 'J', rating: 5 },
    { quote: 'Na matematyce w końcu rozumiem — a nie tylko przepisuję z tablicy.', author: 'Kacper, klasa 8', role: 'Uczeń CURIO', initial: 'K', rating: 5 },
    { quote: 'Prowadzący traktują dzieciaki serio. Widać pasję, nie odklepywanie godzin.', author: 'Piotr — tata Ali', role: 'Rodzic CURIO', initial: 'P', rating: 4.5 },
    { quote: 'Kameralnie, konkretnie, bez presji. Dokładnie tego szukaliśmy.', author: 'Ewa — mama Franka', role: 'Rodzic CURIO', initial: 'E', rating: 5 },
    { quote: 'Nauczyciel wytłumaczył mi logarytmy w 10 minut. Szkole zajęło to pół roku.', author: 'Zosia, liceum kl. 2', role: 'Uczennica CURIO', initial: 'Z', rating: 5 },
    { quote: 'Syn sam prosi o dodatkowe zadania. Do dziś tego nie ogarniam.', author: 'Tomasz — tata Bartka', role: 'Rodzic CURIO', initial: 'T', rating: 4.5 },
    { quote: 'Spoko atmosfera — nikt się nie śmieje jak czegoś nie wiem. To dużo zmienia.', author: 'Bartek, klasa 7', role: 'Uczeń CURIO', initial: 'B', rating: 4 },
  ];

  const features = [
    { num: '01', title: 'Ludzie z pasją', body: 'Prowadzący, którzy sami kochają się uczyć i potrafią to zarazić.' },
    { num: '02', title: 'Realne wyniki', body: 'Konkretny plan, mierzalne postępy, spokój rodzica.' },
    { num: '03', title: 'Ciekawość > oceny', body: 'Uczymy myśleć, nie wkuwać. Oceny przychodzą przy okazji.' },
    { num: '04', title: 'Praca domowa to podstawa', body: 'Zadania dostosowane do indywidualnych potrzeb i poziomu zaawansowania w dedykowanym systemie.' },

  ];

  const featuredSubjects = [
    {
      glyph: '∑',
      tag: 'Klasy 6–8 • stacjonarnie • grupy 4–8 os.',
      name: 'Matematyka do egzaminu',
      desc: 'Pełny zakres CKE, testy próbne i strategie na czas. Nasz główny produkt — sprawdzony na setkach uczniów.',
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
      desc: 'Program matematyczny prowadzony w całości po angielsku. Dla uczniów szkół dwujęzycznych i z programem IB.',
    },
    {
      glyph: '★',
      tag: 'Każdy wiek • wstęp zależy od grupy',
      name: 'Matematyka dla mistrzów',
      desc: 'Wychodzimy poza szkolny materiał — matematyka, która faktycznie się przydaje. Teoria, praktyka i zadania konkursowe w jednym. Poziom grupy ważniejszy niż klasa.',
    },
  ];


  const locationInfo = [
    { icon: '◎', label: 'Adres', value: 'Wilanów lub Ursynów, Warszawa — wybieramy lokalizację.', comingSoon: true },
    { icon: '◷', label: 'Godziny', value: 'Zajęcia: pon–pt 14:00–21:00 · sob–nd 9:00–14:00\nBiuro: pon–pt 8:00–18:00' },
    { icon: '✆', label: 'Kontakt', value: 'biuro@e-curio.pl' },
  ];

  const nav = [
    { label: 'Zajęcia', href: 'Zajecia.dc.html' },
    { label: 'Opinie', href: '#opinie' },
    { label: 'Pakiety', href: 'Pakiety.dc.html' },
    { label: 'Kadra', href: 'Kadra.dc.html' },
    { label: 'Lokalizacja', href: '#lokalizacja' },
    { label: 'Kontakt', href: 'Kontakt.dc.html' },
  ];

  const testimonialCard = (item) => `
    <article class="card testimonial">
      <div class="testimonial__stars" aria-label="${item.rating || 5} na 5">${Curio.stars(item.rating || 5)}</div>
      <p class="testimonial__quote">${Curio.escapeHtml(item.quote)}</p>
      <div class="testimonial__author">
        <div class="testimonial__avatar" aria-hidden="true">${Curio.escapeHtml(item.initial)}</div>
        <div>
          <p class="testimonial__name">${Curio.escapeHtml(item.author)}</p>
          <p class="testimonial__role">${Curio.escapeHtml(item.role || 'Rodzic CURIO')}</p>
        </div>
      </div>
    </article>`;

  const featureCard = (item) => `
    <article class="card">
      <div class="feature-index">${Curio.escapeHtml(item.num)}</div>
      <h3 class="feature-name">${Curio.escapeHtml(item.title)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.body)}</p>
    </article>`;

  const subjectPreviewCard = (item) => `
    <article class="card">
      ${item.comingSoon ? '<span class="badge--coming-soon">Coming soon</span>' : ''}
      <div class="feature-index">${Curio.escapeHtml(item.glyph)}</div>
      <p class="card__tag">${Curio.escapeHtml(item.tag)}</p>
      <h3 class="feature-name">${Curio.escapeHtml(item.name)}</h3>
      <p class="feature-copy">${Curio.escapeHtml(item.desc)}</p>
    </article>`;

  const infoCard = (item) => `
    <article class="card info-card">
      ${item.comingSoon ? '<span class="badge--coming-soon">Coming soon</span>' : ''}
      <div class="info-card__icon" aria-hidden="true">${Curio.escapeHtml(item.icon)}</div>
      <div>
        <p class="info-card__label">${Curio.escapeHtml(item.label)}</p>
        <p class="info-card__value">${Curio.escapeHtml(item.value).replace(/\n/g, '<br>')}</p>
      </div>
    </article>`;

  app.innerHTML = `
    <div class="curio-app curio-home" id="top">
      ${Curio.shell({ active: 'home', navLinks: nav, ctaHref: 'Kontakt.dc.html' })}
      <main>
        <section class="hero" data-curio-fx="constellation">
          <div class="container hero-grid">
            <div>
              <div class="hero-badge">Zajęcia i kursy • Warszawa</div>
              <h1 class="hero-title">Myślenie to sport. Trenujemy <em id="hero-typed">mistrzów.</em></h1>
              <p class="hero-lead">Uczymy w kameralnym gronie, według przejrzystego planu i z pełnym zaangażowaniem. Od podstawówki do matury, bez presji, za to z ciekawością w centrum.</p>
              <div class="hero-actions">
                ${Curio.button('Umów bezpłatną lekcję', 'Kontakt.dc.html', 'primary')}
                ${Curio.button('Zobacz pakiety', 'Pakiety.dc.html', 'outline')}
              </div>
              <div class="hero-stats" aria-label="Kluczowe liczby">
                <div class="hero-stat"><span class="hero-stat__value" data-count-target="3" data-count-suffix=" lat">3 lat</span><span class="hero-stat__label">na rynku</span></div>
                <div class="hero-stat"><span class="hero-stat__value" data-count-target="100" data-count-suffix="+">100+</span><span class="hero-stat__label">uczniów rocznie</span></div>
                <div class="hero-stat"><span class="hero-stat__value" data-count-target="8" data-count-prefix="do " data-count-suffix=" osób">do 8 osób</span><span class="hero-stat__label">w grupie</span></div>
              </div>
            </div>
            <div class="hero-visual">
              ${Curio.placeholder('zdjęcie — zajęcia / uczeń', 'placeholder--hero')}
              <div class="badge-card">
                <p class="badge-card__eyebrow">Pierwsza lekcja</p>
                <p class="badge-card__title">za darmo</p>
                <p class="badge-card__copy">Sprawdzamy poziom, cele i to, jaki format pracy będzie dla ucznia najlepszy.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="opinie" class="section section--band">
          <div class="container">
            <div class="section-head">
              <div>
                <p class="eyebrow">Opinie</p>
                <h2 class="section-title">Co mówią <em id="sub-hero-typed">rodzice</em></h2>
              </div>
              <a class="section-link" href="Kontakt.dc.html">Umów pierwszą lekcję →</a>
            </div>
            <div class="marquee" data-marquee>
              <div class="marquee__track" data-marquee-track>
                ${[...testimonials, ...testimonials].map(testimonialCard).join('')}
              </div>
            </div>
          </div>
        </section>

        <section id="zajecia" class="section" data-curio-fx="net">
          <div class="container">
            <p class="eyebrow">Dlaczego CURIO</p>
            <h2 class="section-title feature-intro">Zajęcia, które budują pewność siebie, a nie tylko odhaczone godziny.</h2>
            <div class="grid grid--4" style="margin-top:28px;">
              ${features.map(featureCard).join('')}
            </div>
          </div>
        </section>

        <section id="oferta" class="section section--band">
          <div class="container">
            <div class="section-head">
              <div>
                <p class="eyebrow">Nasze zajęcia</p>
                <h2 class="section-title">Co prowadzimy — cztery flagowe kierunki.</h2>
              </div>
              <a class="section-link" href="Zajecia.dc.html">Pełna oferta zajęć →</a>
            </div>
            <div class="grid grid--4" style="margin-top:28px;">
              ${featuredSubjects.map(subjectPreviewCard).join('')}
            </div>
          </div>
        </section>

        <section id="kadra" class="section" data-curio-fx="curve">
          <div class="container">
            <div class="section-head">
              <div>
                <p class="eyebrow">O nas</p>
                <h2 class="section-title">Ludzie, którzy uczą z energią i spokojem.</h2>
              </div>
              <a class="section-link" href="Kadra.dc.html">Poznaj całą kadrę →</a>
            </div>
          </div>
        </section>

        <section id="lokalizacja" class="section section--band">
          <div class="container">
            <p class="eyebrow">Gdzie jesteśmy</p>
            <h2 class="section-title">Lądujemy na <em>Wilanowie</em><br>lub <em>Ursynowie</em>.</h2>
            <p class="section-copy">Szukamy idealnego miejsca na pracownię w południowej Warszawie. Ogłosimy adres, jak tylko podpiszemy umowę — śledź nas.</p>
            <div class="grid grid--info" style="margin-top:28px;">
              <div style="border-radius:var(--radius); background:var(--surface-2); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; min-height:320px; padding:48px 32px; position:relative; overflow:hidden;">
                <div style="position:absolute; inset:0; background-image:radial-gradient(circle, rgba(47,107,255,0.07) 1px, transparent 1px); background-size:28px 28px; pointer-events:none;"></div>
                <div style="width:68px; height:68px; border-radius:50%; background:var(--accent); display:flex; align-items:center; justify-content:center; font-size:30px; color:#fff; margin-bottom:22px; position:relative; z-index:1; box-shadow:0 4px 24px rgba(47,107,255,0.32);">◎</div>
                <h3 style="font-family:'Newsreader',Georgia,serif; font-size:22px; font-weight:400; line-height:1.2; margin:0 0 12px; position:relative; z-index:1;">Wilanów lub Ursynów</h3>
                <p style="color:var(--muted); font-size:14.5px; max-width:260px; line-height:1.6; margin:0; position:relative; z-index:1;">Poszukujemy sali, która zasługuje na CURIO. Ogłosimy ją wkrótce.</p>
              </div>
              <div class="stack">
                ${locationInfo.map(infoCard).join('')}
                ${Curio.button('Umów wizytę →', 'Kontakt.dc.html', 'primary')}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" class="section">
          <div class="container">
            <div class="cta-band">
              <p class="eyebrow">Start</p>
              <h2 class="section-title">Pierwsza lekcja jest za darmo.</h2>
              <p class="section-copy">Wyślij wiadomość, a wrócimy z propozycją terminu i formatu pracy dopasowanego do ucznia.</p>
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

  Curio.initMarquee(app);
  Curio.initAnimations(app);
  Curio.initCounters(app);
  Curio.initParticles(app.querySelector('.hero'));
  Curio.initTyped('#hero-typed', ['mistrzów.', 'odkrywców.', 'matematyków.', 'myślicieli.']);
  Curio.initTyped('#sub-hero-typed', ['uczniowie.', 'rodzice.']);
});
