# Handoff: CURIO — strona firmy (korepetycje i kursy)

## Overview
Marketing website for **CURIO**, a Warsaw-based tutoring & courses company for kids/teens.
Multi-page site: homepage + Zajęcia (classes), Pakiety (pricing), Kadra (team).
Language: Polish. Tone: warm, confident, "curiosity is a sport we train".

## About the Design Files
The `*.dc.html` files in this bundle are **design references created in HTML** — prototypes
showing the intended look and behavior, **not production code to copy directly**. They are
authored in a proprietary "Design Component" runtime (`support.js` + `<x-dc>` templates +
a `class Component extends DCLogic` block) that will **not** run in a normal codebase.

Your task is to **recreate these designs in the target codebase's environment** (React/Next,
Vue, Astro, plain HTML — whatever the project uses) following its established patterns. If no
codebase exists yet, pick the most appropriate framework (Next.js/Astro are good fits for a
marketing site) and implement there.

`curio-standalone-preview.html` is a fully-bundled, self-contained rendering of the homepage —
open it in a browser to see the final result. It's a reference/preview only, not source to edit.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are all specified.
Recreate pixel-accurately using the exact tokens below.

## Reading the source
Each `.dc.html` has two relevant parts:
- The template markup between `<x-dc>` and `</x-dc>` — this is the DOM/layout, all inline-styled.
- The `class Component extends DCLogic { renderVals(){ ... } }` script at the bottom — this holds
  all the **content data** (testimonials, features, packages, founders, location info) and a few
  handlers (palette switch, marquee pause). Lift the data arrays straight from `renderVals()`.
- Ignore `support.js`, `<helmet>`, `<sc-for>`, `<sc-if>`, `{{ }}` holes, `data-props`, and the
  palette/localStorage plumbing — those are runtime scaffolding. `<sc-for list as>` = a `.map()`,
  `<sc-if value>` = conditional render.

## Screens / Views

### 1. Homepage — `Curio.dc.html`
Max content width **1240px**, centered, `padding: 0 32px`. Sections top→bottom:

- **Sticky nav**: translucent bg (`color-mix(bg 82%, transparent)`) + `backdrop-filter: blur(14px)`,
  1px bottom border. Left: compass-style SVG logo (see Assets) + wordmark "CURIO" (Newsreader,
  weight 500, 26px, letter-spacing .14em). Center nav links: Zajęcia, Opinie, Pakiety, Kadra,
  Lokalizacja (14.5px, muted → ink on hover). Right: palette swatches + pill CTA "Bezpłatna lekcja".
- **Hero**: 2-col grid `1.15fr .85fr`, gap 56px, padding `84px 0 76px`. Radial glow blob top-left.
  Left col: pill eyebrow ("Korepetycje i kursy • Warszawa") with 6px accent dot; H1 (Newsreader
  400, clamp 46–84px, line-height 1.02) "Myślenie to sport. Trenujemy *mistrzów*." (word "mistrzów"
  italic + accent); lead paragraph (19px, muted); two CTAs (filled pill + outline pill); 3 stats
  ("8 lat", "300+", "do 6 osób") separated by 1px vertical rules. Right col: 4/5 aspect striped
  image placeholder + floating "Pierwsza lekcja / za darmo" badge card bottom-left.
- **Opinie (testimonials marquee)**: full-width band, `border-top/bottom` + `--surface` bg.
  Heading "Co mówią *rodzice*". Horizontal auto-scroll marquee (CSS `@keyframes curioMarquee`,
  46s linear infinite, translateX -50%→0), edge fade via `mask-image` linear-gradient, **pauses on
  hover** (set `animation-play-state: paused`). Cards: 360px wide, 5 gold stars, quote (Newsreader
  19px), avatar circle w/ initial + author line. Data = `testimonials[]` duplicated ×2 for seamless loop.
- **Oferta / Dlaczego**: eyebrow "Dlaczego CURIO", H2, 4-col grid of feature cards (numbered
  01–04 in a rounded surface-2 tile, title 18.5px/700, body 14.5px muted). Data = `features[]`.
- **Pakiety teaser**: eyebrow + H2 + "Wszystkie pakiety →" link. 3-col grid of pricing cards.
  Middle card ("Klub CURIO") is **featured**: 2px accent border + "Najczęściej wybierany" badge
  (absolute top-right) + filled CTA button; others have 1px line border + outline button.
  Each card: tag (uppercase), name (Newsreader 30px), desc, price (Newsreader 40px) + "zł / h",
  perks list w/ accent ✓, CTA. Data = `packages[]`.
- **O nas teaser**: eyebrow + H2 + intro + "Poznaj całą kadrę →" link. 2-col grid of founder
  cards: 120px striped photo placeholder + name (20px/700) + role (accent) + bio. Data = `founders[]`.
- **Lokalizacja**: eyebrow "Gdzie jesteśmy", H2 "Wpadnij do nas w *Warszawie*.", intro.
  2-col grid `1fr .82fr`, gap 24px. Left: 360px-min striped map/photo placeholder with an absolute
  pin badge top-left ("CURIO — pracownia / ul. Nowy Świat 12, Śródmieście"). Right: column of 4
  info cards (icon tile + uppercase label + value) from `locationInfo[]` (Adres, Godziny, Dojazd,
  Kontakt) + a full-width filled pill CTA "Umów wizytę →". **NOTE: address, phone and hours are
  placeholder/sample data — confirm real values with the client.**
- **CTA band**: full-width accent-colored rounded block (`radius + 6px`), padding `64px 56px`,
  two decorative concentric circle outlines (opacity .12) top-right, H2 "Pierwsza lekcja jest za
  darmo." + subtext + light pill button "Umów termin →".
- **Footer**: logo + tagline "Feed the curious mind." (Newsreader italic) + two link columns
  (Strona / Kontakt) + bottom bar with copyright.

### 2–4. Zajęcia / Pakiety / Kadra — `Zajecia.dc.html`, `Pakiety.dc.html`, `Kadra.dc.html`
Sub-pages sharing the same nav, footer, tokens, and type system. Read each file's template +
`renderVals()` for their specific content and layout; apply the identical design tokens.

## Interactions & Behavior
- **Sticky header** with blur backdrop.
- **Testimonials marquee**: infinite CSS translate loop; pause on `mouseenter`, resume on `mouseleave`.
- **Palette switcher** (optional to port): 3 color themes (A/B/C) toggled via nav swatches; choice
  persisted to `localStorage` and applied by setting a class (`pal-a|b|c`) on `<html>`. **Ship palette
  A only** unless the client wants a live theme switcher — it's a nice-to-have, not core.
- **Hover states**: nav links muted→ink; filled pills `--accent`→`--accent-2`; outline pills
  border→accent; footer links →accent.
- All CTAs are anchors; primary flow points to `#kontakt` (contact/CTA band). Cross-page links use
  relative page URLs.
- Responsive: not yet specified in the mocks (designed at ~1240px desktop). Add sensible breakpoints —
  collapse hero/pakiety/location grids to single column, wrap nav, on tablet/mobile.

## Design Tokens (Palette A — primary)
Colors:
- `--bg` #EDF3FC (page background)
- `--surface` #FFFFFF
- `--surface-2` #E2ECFB
- `--ink` #10213E (primary text)
- `--muted` #5C6C88 (secondary text)
- `--accent` #2F6BFF
- `--accent-2` #175BFF (hover)
- `--accent-ink` #FFFFFF (text on accent)
- `--line` rgba(16,33,62,.10) (borders/dividers)
- `--glow` rgba(47,107,255,.18) (hero radial blob)
- `--card-shadow` 0 12px 34px rgba(24,52,120,.10)

Alt palettes (only if theme switcher is wanted):
- **B (Grafit + złoto)**: bg #161719, surface #1F2023, surface-2 #292B2F, ink #ECE7DC, muted #9C9DA0, accent #CBA24C, accent-2 #E0C079, accent-ink #161719.
- **C (Zieleń + kość słoniowa)**: bg #0E271C, surface #153524, surface-2 #1C4531, ink #F1ECDF, muted #A0B4A6, accent #D9A64E, accent-2 #EBC57F, accent-ink #0E271C.

Radius: default `--radius` 16px (sharp variant 3px, soft variant 26px). Pills use `999px`.
Content max-width: 1240px. Section horizontal padding: 32px.

Typography:
- **Display / headings / prices / wordmark**: `Newsreader` (Google Fonts), weight 400 (500 for
  wordmark), often with italic accent words colored `--accent`. Sizes via `clamp()` — H1
  clamp(46px,6.2vw,84px), section H2 clamp(32px,4.4vw,52px), line-height ~1.02–1.08,
  letter-spacing ≈ -.01em.
- **Body / UI**: `'Helvetica Neue', Helvetica, Arial, sans-serif`. Body 14.5–19px, line-height
  1.5–1.62. Eyebrows: 12px, uppercase, letter-spacing .16em, color `--accent`.

Shadows: cards use `--card-shadow`; floating badges use a stronger `0 24px 48px rgba(0,0,0,.32)`.

## Content Data
All copy lives in each file's `renderVals()`. Homepage arrays: `testimonials` (6), `features` (4),
`packages` (3, middle featured), `founders` (2), `locationInfo` (4). Copy is final Polish text —
reuse verbatim, but **verify the sample address/phone/hours in `locationInfo`** with the client.

## Assets
- **Logo**: inline SVG "compass" mark — a circle (r 13.5, stroke 2.4), 4 cardinal tick lines
  (rounded caps), and a small filled `--accent` center dot (r 4.2), on a 40×40 viewBox. Reproduce
  as an SVG component; recolor via `currentColor` + accent.
- **Photos**: all image areas are **diagonal-stripe placeholders** (`repeating-linear-gradient`)
  with a monospace caption of what belongs there (e.g. "zdjęcie — zajęcia / uczeń", "mapa /
  zdjęcie budynku", "foto"). Replace with real photography / an embedded map (Google Maps /
  Mapbox iframe or static image) during implementation.
- **Icons**: currently Unicode glyphs (✓ ◎ ◷ ⇄ ✆ ★). Swap for the project's icon library
  (Lucide/Heroicons etc.) for crispness.
- No external image files are used.

## Files in this bundle
- `Curio.dc.html` — homepage (primary reference)
- `Zajecia.dc.html`, `Pakiety.dc.html`, `Kadra.dc.html` — sub-pages
- `curio-standalone-preview.html` — bundled, browser-openable preview of the homepage (view only)
# curio_web_page
