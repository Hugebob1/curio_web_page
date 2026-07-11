document.addEventListener('DOMContentLoaded', () => {
  const Curio = window.CurioCommon;
  const app = document.getElementById('app');

  if (!Curio || !app) {
    return;
  }

  Curio.setReady();

  const nav = [
    { label: 'Zajęcia', href: 'Zajecia.dc.html' },
    { label: 'Opinie', href: 'Curio.dc.html#opinie' },
    { label: 'Pakiety', href: 'Pakiety.dc.html' },
    { label: 'Kadra', href: 'Kadra.dc.html' },
    { label: 'Lokalizacja', href: 'Curio.dc.html#lokalizacja' },
    { label: 'Kontakt', href: 'Kontakt.dc.html' },
  ];

  app.innerHTML = `
    <div class="curio-app curio-subpage">
      ${Curio.shell({ brandHref: 'Curio.dc.html', navLinks: nav, ctaHref: 'Kontakt.dc.html' })}
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-badge">Dokumenty • CURIO</div>
            <h1 class="hero-title" style="max-width:16ch;">Polityka prywatności</h1>
            <p class="hero-lead" style="max-width:56ch;">Krótko i po ludzku: co robimy z danymi, które nam zostawiasz, i jakie masz w związku z tym prawa.</p>
            <p class="updated">Ostatnia aktualizacja: 10.07.2026</p>
          </div>
        </section>

        <section class="section" style="background:#fff;">
          <div class="container">
            <div class="legal-doc">
              

              <h2>1. Kto jest administratorem Twoich danych</h2>
              <p>Administratorem danych osobowych zbieranych za pośrednictwem strony <a href="Curio.dc.html">e-curio.pl</a> jest:</p>
              <ul>
                <li><strong>CURIO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong></li>
                <li>Adres siedziby: ul. Stefana Dembego 10, lok. 5, 02-796 Warszawa</li>
                <li>NIP: 9512652035</li>
                <li>KRS: 0001253078</li>
                <li>Kontakt: <a href="mailto:biuro@e-curio.pl">biuro@e-curio.pl</a></li>
              </ul>
              <p>W sprawach związanych z ochroną danych możesz skontaktować się z nami mailowo pod adresem <a href="mailto:biuro@e-curio.pl">biuro@e-curio.pl</a>.</p>

              <h2>2. Jakie dane zbieramy</h2>
              <p>Zbieramy dane, które sam nam podajesz — najczęściej za pośrednictwem formularza kontaktowego lub bezpośredniej wiadomości e-mail:</p>
              <ul>
                <li>imię i nazwisko (Twoje lub dziecka),</li>
                <li>adres e-mail,</li>
                <li>numer telefonu,</li>
                <li>treść wiadomości oraz inne informacje, które sam nam przekażesz (klasa, przedmiot, cel spotkania).</li>
              </ul>
              <p>Nie prowadzimy profilowania, nie zbieramy danych wrażliwych i nie wymagamy podawania numeru PESEL ani innych danych identyfikacyjnych wykraczających poza podstawowy kontakt.</p>

              <h2>3. W jakim celu i na jakiej podstawie prawnej</h2>
              <ul>
                <li><strong>Kontakt zwrotny i umówienie zajęć</strong> — art. 6 ust. 1 lit. b RODO (działania na żądanie osoby, której dane dotyczą, przed zawarciem umowy).</li>
                <li><strong>Realizacja umowy o świadczenie usług edukacyjnych</strong>, jeśli do niej dojdzie — art. 6 ust. 1 lit. b RODO.</li>
                <li><strong>Wypełnianie obowiązków prawnych</strong> (np. rachunkowo-podatkowych) — art. 6 ust. 1 lit. c RODO.</li>
                <li><strong>Uzasadniony interes administratora</strong> (np. odpowiedź na zapytanie, obrona przed roszczeniami) — art. 6 ust. 1 lit. f RODO.</li>
              </ul>
              <p style="font-size:0.9em;color:#666;">Uwaga: skoro część klientów to niepełnoletni uczniowie, umowę i zgodę na kontakt zawiera zawsze rodzic/opiekun (jako strona umowy) — nie samo dziecko.</p>

              <h2>4. Jak długo przechowujemy dane</h2>
              <ul>
                <li>Dane z formularza kontaktowego — do momentu zakończenia korespondencji i przez maksymalnie <strong>12 miesięcy</strong> po ostatnim kontakcie, chyba że zawrzemy umowę.</li>
                <li>Dane klientów, którzy zawarli umowę — przez okres jej trwania i <strong>do 5 lat</strong> po zakończeniu roku rozliczeniowego (obowiązek podatkowy).</li>
                <li>Dane związane z ewentualnymi roszczeniami — do upływu terminów przedawnienia.</li>
              </ul>

              <h2>5. Komu przekazujemy dane</h2>
              <p>Twoje dane mogą trafić wyłącznie do zaufanych podmiotów, które pomagają nam prowadzić działalność:</p>
              <ul>
                <li><strong>Serwer / hosting:</strong> serwer własny (self-hosted), zarządzany bezpośrednio przez spółkę, z nginx i certyfikatem Let's Encrypt, fizycznie znajdujący się w Polsce.</li>
                <li><strong>Dostawca poczty elektronicznej:</strong> Zoho Mail (Zoho Corporation), europejskie centrum danych.</li>
                <li>Formularz kontaktowy na stronie jedynie wysyła zgłoszenie e-mailem — nie zapisuje danych w żadnej bazie danych.</li>
                <li>Podmioty świadczące usługi księgowe i prawne — na podstawie odrębnych umów powierzenia.</li>
                <li>Organy państwowe — tylko jeśli wymaga tego przepis prawa.</li>
              </ul>
              <p>Nie sprzedajemy i nie udostępniamy danych do celów marketingowych.</p>

              <h2>6. Przekazywanie danych poza EOG</h2>
              <p>Nasz serwer znajduje się w Polsce, a nasza skrzynka pocztowa działa na europejskim centrum danych dostawcy poczty. Nie przekazujemy danych poza Europejski Obszar Gospodarczy.</p>

              <h2>7. Twoje prawa</h2>
              <p>W związku z przetwarzaniem Twoich danych masz prawo:</p>
              <ul>
                <li>żądać <strong>dostępu</strong> do swoich danych i otrzymania ich kopii,</li>
                <li>żądać <strong>sprostowania</strong> danych, które są nieprawidłowe,</li>
                <li>żądać <strong>usunięcia</strong> danych („prawo do bycia zapomnianym"),</li>
                <li>żądać <strong>ograniczenia</strong> przetwarzania,</li>
                <li>żądać <strong>przeniesienia</strong> danych do innego administratora,</li>
                <li><strong>wnieść sprzeciw</strong> wobec przetwarzania opartego na uzasadnionym interesie,</li>
                <li><strong>wycofać zgodę</strong> w każdej chwili, jeśli przetwarzanie opierało się na zgodzie (nie wpływa to na legalność przetwarzania sprzed wycofania),</li>
                <li>wnieść <strong>skargę do Prezesa UODO</strong> (<a href="https://uodo.gov.pl" target="_blank" rel="noopener">uodo.gov.pl</a>), jeśli uważasz, że przetwarzamy dane niezgodnie z prawem.</li>
              </ul>
              <p>Żeby skorzystać z któregokolwiek z tych praw, napisz do nas na <a href="mailto:biuro@e-curio.pl">biuro@e-curio.pl</a>.</p>

              <h2>8. Czy podanie danych jest obowiązkowe</h2>
              <p>Podanie danych jest dobrowolne, ale niezbędne do skontaktowania się z Tobą i umówienia zajęć. Bez adresu e-mail lub numeru telefonu nie mamy jak Ci odpowiedzieć.</p>

              <h2>9. Cookies i technologie zewnętrzne</h2>
              <p>Strona <a href="Curio.dc.html">e-curio.pl</a>:</p>
              <ul>
                <li><strong>Nie używa cookies analitycznych ani marketingowych.</strong> Nie korzystamy z Google Analytics, Meta Pixel, Hotjar ani żadnych innych narzędzi śledzących zachowanie użytkowników.</li>
                <li><strong>Nie ładuje zasobów z serwerów zewnętrznych.</strong> Czcionki, skrypty i style są hostowane bezpośrednio na naszym serwerze — Twój adres IP nie jest przekazywany podmiotom trzecim podczas przeglądania strony.</li>
                <li>Możesz zablokować cookies i skrypty w ustawieniach swojej przeglądarki.</li>
              </ul>

              <h2>10. Bezpieczeństwo</h2>
              <p>Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane przed nieuprawnionym dostępem, utratą lub zmianą. Dostęp do skrzynki e-mail i systemów ma wyłącznie ograniczony krąg osób w spółce.</p>

              <h2>11. Zmiany polityki</h2>
              <p>Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Aktualna wersja jest zawsze dostępna pod tym adresem. Data ostatniej aktualizacji znajduje się na górze strony.</p>
            </div>
          </div>
        </section>

        <section id="kontakt" class="section section--band">
          <div class="container">
            <div class="cta-band">
              <p class="eyebrow">Masz pytania</p>
              <h2 class="section-title">Coś jest niejasne? Napisz.</h2>
              <p class="section-copy">W kwestiach dotyczących danych osobowych odpowiadamy zwykle w ciągu 2 dni roboczych.</p>
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