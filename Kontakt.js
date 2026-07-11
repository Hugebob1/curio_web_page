document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) return;
  Curio.setReady();

  const API_URL = 'http://localhost:8000';

  const nav = [
    { label: 'Zajęcia', href: 'Zajecia.dc.html' },
    { label: 'Opinie', href: 'Curio.dc.html#opinie' },
    { label: 'Pakiety', href: 'Pakiety.dc.html' },
    { label: 'Kadra', href: 'Kadra.dc.html' },
    { label: 'Lokalizacja', href: 'Curio.dc.html#lokalizacja' },
    { label: 'Kontakt', href: '#formularz', current: true },
  ];

  const facebookIcon = `<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>`;

  const instagramIcon = `<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="3"/>
  </svg>`;

  const tiktokIcon = `<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.83a8.19 8.19 0 0 0 4.77 1.52V7.93a4.85 4.85 0 0 1-1-.24z"/>
  </svg>`;

  app.innerHTML = `
    <div class="curio-app curio-subpage">
      ${Curio.shell({ brandHref: 'Curio.dc.html', navLinks: nav, ctaHref: '#formularz' })}
      <main>

        <section class="hero" data-curio-fx="constellation">
          <div class="container">
            <div style="max-width:620px;">
              <div class="hero-badge">Kontakt • CURIO</div>
              <h1 class="hero-title">Napisz<br>do nas.</h1>
              <p class="hero-lead">Odpiszemy w ciągu 24 godzin. Możesz też zadzwonić bezpośrednio — numery telefonu znajdziesz poniżej.</p>
              <div class="hero-actions">
                ${Curio.button('Przejdź do formularza', '#formularz', 'primary')}
              </div>
            </div>
          </div>
        </section>

        <section id="formularz" class="section section--band">
          <div class="container">
            <div class="grid grid--info" style="gap:32px;">

              <article class="card" style="padding:36px 40px;">
                <p class="eyebrow" style="margin-bottom:14px;">Formularz kontaktowy</p>
                <h2 style="font-family:'Newsreader',Georgia,serif; font-size:clamp(20px,2.4vw,26px); font-weight:400; line-height:1.2; margin:0 0 28px; letter-spacing:-0.01em;">Opisz, czego potrzebuje uczeń.</h2>
                <form class="contact-form" id="contact-form" novalidate>
                  <div class="form-field">
                    <label class="form-label" for="cf-name">Imię i nazwisko</label>
                    <input class="form-input" id="cf-name" name="imie_nazwisko" type="text" placeholder="np. Anna Kowalska" autocomplete="name" required>
                  </div>
                  <div class="form-field">
                    <label class="form-label" for="cf-email">Adres e-mail</label>
                    <input class="form-input" id="cf-email" name="email" type="email" placeholder="twoj@email.pl" autocomplete="email" required>
                  </div>
                  <div class="form-field">
                    <label class="form-label" for="cf-phone">Numer telefonu</label>
                    <input class="form-input" id="cf-phone" name="telefon" type="tel" placeholder="+48 000 000 000" autocomplete="tel">
                  </div>
                  <div class="form-field">
                    <label class="form-label" for="cf-message">Treść zapytania</label>
                    <textarea class="form-textarea" id="cf-message" name="wiadomosc" placeholder="Napisz, jakiego przedmiotu szukasz, dla którego ucznia i czego oczekujesz od zajęć…" required></textarea>
                  </div>
                  <label class="form-consent" for="cf-consent">
                    <input class="form-consent__checkbox" id="cf-consent" name="zgoda" type="checkbox" required>
                    <span class="form-consent__text">
                      Zapoznałem/am się z <a href="Polityka-prywatnosci.dc.html" target="_blank" rel="noopener">polityką prywatności</a> i wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie i umówienia zajęć. Administratorem danych jest CURIO. Podanie danych jest dobrowolne, ale niezbędne do kontaktu.
                    </span>
                  </label>
                  <div style="margin-top:4px; display:flex; flex-direction:column; gap:12px;">
                    <button type="submit" class="button button--primary" id="cf-submit">Wyślij wiadomość →</button>
                    <p id="form-status" class="form-status" aria-live="polite"></p>
                  </div>
                </form>
              </article>

              <div class="contact-sidebar">

                <article class="card">
                  <p class="eyebrow" style="margin-bottom:18px;">Zadzwoń do nas</p>
                  <div class="contact-phone-list">
                    <a class="contact-phone-number" href="tel:+48519841931">
                      <span class="phone-icon" aria-hidden="true">✆</span>
                      <span>+48 519 841 931   Mateusz</span>
                    </a>
                    <a class="contact-phone-number" href="tel:+48606317505">
                      <span class="phone-icon" aria-hidden="true">✆</span>
                      <span>+48 606 317 505   Aleksander</span>
                    </a>
                  </div>
                </article>

                <article class="card">
                  <p class="eyebrow" style="margin-bottom:18px;">Znajdź nas w social media</p>
                  <div class="social-links">
                    <a class="social-link" href="https://www.facebook.com/profile.php?id=61591252987301&rdid=nZqw1uE0o2npkRhd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KxFCbziYq%2F" target="_blank" rel="noopener noreferrer">
                      ${facebookIcon}
                      <span>Facebook</span>
                    </a>
                    <a class="social-link" href="https://www.instagram.com/curio_pl/" target="_blank" rel="noopener noreferrer">
                      ${instagramIcon}
                      <span>Instagram</span>
                    </a>
                    <a class="social-link" href="https://www.tiktok.com/@curio_pl?_r=1&_t=ZN-97mMqY8uuJS" target="_blank" rel="noopener noreferrer">
                      ${tiktokIcon}
                      <span>TikTok</span>
                    </a>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

      </main>
      ${Curio.footer()}
    </div>
  `;

  Curio.initAnimations(app);

  const form = app.querySelector('#contact-form');
  const submitBtn = app.querySelector('#cf-submit');
  const statusEl = app.querySelector('#form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      imie_nazwisko: form.querySelector('[name="imie_nazwisko"]').value.trim(),
      email: form.querySelector('[name="email"]').value.trim(),
      telefon: form.querySelector('[name="telefon"]').value.trim(),
      wiadomosc: form.querySelector('[name="wiadomosc"]').value.trim(),
    };

    const consent = form.querySelector('[name="zgoda"]').checked;

    if (!data.imie_nazwisko || !data.email || !data.wiadomosc) {
      statusEl.textContent = 'Wypełnij wymagane pola: imię i nazwisko, e-mail oraz treść.';
      statusEl.className = 'form-status form-status--error';
      return;
    }

    if (!consent) {
      statusEl.textContent = 'Zaznacz zgodę na przetwarzanie danych osobowych, żebyśmy mogli się z Tobą skontaktować.';
      statusEl.className = 'form-status form-status--error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Wysyłanie…';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    try {
      const res = await fetch(`${API_URL}/send-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(await res.text());

      form.innerHTML = `
        <div class="form-success">
          <div class="form-success__icon">✓</div>
          <h3 class="form-success__title">Wiadomość wysłana</h3>
          <p class="form-success__copy">Odezwiemy się wkrótce na adres <strong>${Curio.escapeHtml(data.email)}</strong>.</p>
        </div>`;
    } catch {
      statusEl.textContent = 'Coś poszło nie tak — spróbuj ponownie lub napisz bezpośrednio na biuro@e-curio.pl.';
      statusEl.className = 'form-status form-status--error';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Wyślij wiadomość →';
    }
  });
});
