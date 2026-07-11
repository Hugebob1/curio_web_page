/* =============================================================
   CURIO — żywe tła sekcji (drop-in)
   -------------------------------------------------------------
   JAK UŻYĆ:
   1. Dodaj ten plik do projektu i podłącz w <head> po pozostałych
      skryptach:  <script defer src="curio-fx.js"></script>
   2. Na sekcjach, które mają dostać efekt, ustaw atrybut:
        <section data-curio-fx="net">   ...  </section>   ← sieć (wariant A)
        <section data-curio-fx="curve"> ...  </section>   ← funkcje (wariant B)
      Rytm z przerwami stosuj ręcznie, np.:
        Opinie        -> data-curio-fx="net"
        Dlaczego      -> (bez atrybutu — przerwa)
        Nasze zajęcia -> data-curio-fx="curve"
        Lokalizacja   -> (bez atrybutu — przerwa)
   3. Opcjonalnie: data-curio-fx-color="47,107,255" nadpisuje kolor akcentu (RGB).
   Skrypt sam wstawia <canvas> do sekcji i dba o warstwy (treść jest nad tłem).
   Respektuje prefers-reduced-motion.
   ============================================================= */
(function () {
  'use strict';

  var DEFAULT_ACCENT = [47, 107, 255];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function accentOf(section) {
    var raw = section.getAttribute('data-curio-fx-color');
    if (!raw) return DEFAULT_ACCENT;
    var p = raw.split(',').map(function (n) { return parseInt(n, 10); });
    return (p.length === 3 && p.every(function (n) { return !isNaN(n); })) ? p : DEFAULT_ACCENT;
  }

  // Wstawia canvas i dba, żeby tło było POD treścią sekcji.
  function mountCanvas(section) {
    var cs = getComputedStyle(section);
    if (cs.position === 'static') section.style.position = 'relative';
    section.style.isolation = 'isolate';
    if (cs.overflow === 'visible') section.style.overflow = 'hidden';

    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;display:block;' +
      'pointer-events:none;z-index:-1;';
    section.insertBefore(canvas, section.firstChild);
    return canvas;
  }

  function sizedContext(canvas) {
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      var r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener('resize', resize);
    return { ctx: ctx, get w() { return w; }, get h() { return h; } };
  }

  // ── Wariant A · Sieć myśli ──
  function runNet(section) {
    var accent = accentOf(section);
    var S = sizedContext(mountCanvas(section));
    var pts = [];
    // Gęsta, równomierna siatka: więcej punktów, rozłożone w grid + jitter.
    function target() { return Math.max(48, Math.round(S.w * S.h / 11000)); }
    function build() {
      pts = [];
      var n = target();
      var cols = Math.max(4, Math.round(Math.sqrt(n * (S.w / Math.max(1, S.h)))));
      var rows = Math.max(3, Math.ceil(n / cols));
      var cellW = S.w / cols, cellH = S.h / rows;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          if (pts.length >= n) break;
          pts.push({
            x: (c + 0.15 + Math.random() * 0.7) * cellW,
            y: (r + 0.15 + Math.random() * 0.7) * cellH,
            vx: (Math.random() - 0.5) * 0.32,
            vy: (Math.random() - 0.5) * 0.32
          });
        }
      }
    }
    build();
    var D = 170;
    function frame() {
      var ctx = S.ctx, w = S.w, h = S.h, i, j;
      if (Math.abs(pts.length - target()) > 8) build();
      ctx.clearRect(0, 0, w, h);
      for (i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 4) { p.x = 4; p.vx = Math.abs(p.vx); }
        else if (p.x > w - 4) { p.x = w - 4; p.vx = -Math.abs(p.vx); }
        if (p.y < 4) { p.y = 4; p.vy = Math.abs(p.vy); }
        else if (p.y > h - 4) { p.y = h - 4; p.vy = -Math.abs(p.vy); }
      }
      for (i = 0; i < pts.length; i++) {
        for (j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          var d = Math.hypot(dx, dy);
          if (d < D) {
            ctx.strokeStyle = 'rgba(' + accent[0] + ',' + accent[1] + ',' + accent[2] + ',' + ((1 - d / D) * 0.34) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      ctx.fillStyle = 'rgba(' + accent[0] + ',' + accent[1] + ',' + accent[2] + ',0.6)';
      for (i = 0; i < pts.length; i++) {
        ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.9, 0, 7); ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    if (reduce) { frame(); return; }
    frame();
  }

  // ── Wariant C · Konstelacja (subtelny) ──
  function runConstellation(section) {
    var accent = accentOf(section);
    var S = sizedContext(mountCanvas(section));
    var pts = [];
    function target() { return Math.max(22, Math.round(S.w * S.h / 26000)); }
    function build() {
      pts = [];
      var n = target();
      var cols = Math.max(3, Math.round(Math.sqrt(n * (S.w / Math.max(1, S.h)))));
      var rows = Math.max(2, Math.ceil(n / cols));
      var cellW = S.w / cols, cellH = S.h / rows;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          if (pts.length >= n) break;
          pts.push({
            x: (c + 0.2 + Math.random() * 0.6) * cellW,
            y: (r + 0.2 + Math.random() * 0.6) * cellH,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    }
    build();
    var D = 210;
    var NEIGHBORS = 2; // ile najbliższych łączymy dla każdego punktu
    var t = 0;
    function frame() {
      var ctx = S.ctx, w = S.w, h = S.h, i, j;
      t += 0.016;
      if (Math.abs(pts.length - target()) > 6) build();
      ctx.clearRect(0, 0, w, h);

      // ruch + odbicia
      for (i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 4) { p.x = 4; p.vx = Math.abs(p.vx); }
        else if (p.x > w - 4) { p.x = w - 4; p.vx = -Math.abs(p.vx); }
        if (p.y < 4) { p.y = 4; p.vy = Math.abs(p.vy); }
        else if (p.y > h - 4) { p.y = h - 4; p.vy = -Math.abs(p.vy); }
      }

      // Dla każdego punktu — połącz tylko z NEIGHBORS najbliższymi w promieniu D
      for (i = 0; i < pts.length; i++) {
        var pi = pts[i];
        var near = [];
        for (j = 0; j < pts.length; j++) {
          if (i === j) continue;
          var dx = pi.x - pts[j].x, dy = pi.y - pts[j].y;
          var d = Math.hypot(dx, dy);
          if (d < D) near.push({ idx: j, d: d });
        }
        near.sort(function (a, b) { return a.d - b.d; });
        var count = Math.min(NEIGHBORS, near.length);
        for (var k = 0; k < count; k++) {
          var q = pts[near[k].idx];
          var alpha = (1 - near[k].d / D) * 0.14;
          ctx.strokeStyle = 'rgba(' + accent[0] + ',' + accent[1] + ',' + accent[2] + ',' + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(pi.x, pi.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }

      // Pulsujące kropki
      for (i = 0; i < pts.length; i++) {
        var pp = pts[i];
        var pulse = 0.5 + 0.5 * Math.sin(t + pp.phase);
        var a = 0.28 + pulse * 0.22;
        ctx.fillStyle = 'rgba(' + accent[0] + ',' + accent[1] + ',' + accent[2] + ',' + a + ')';
        ctx.beginPath(); ctx.arc(pp.x, pp.y, 1.4 + pulse * 0.5, 0, 7); ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    if (reduce) { frame(); return; }
    frame();
  }

  // ── Wariant B · Przepływ funkcji (spokojny) ──
  function runCurve(section) {
    var accent = accentOf(section);
    var S = sizedContext(mountCanvas(section));
    var mx = 0.5, warp = 0;
    section.addEventListener('mousemove', function (e) {
      var r = section.getBoundingClientRect();
      mx = (e.clientY - r.top) / r.height;
    });
    var waves = [
      { amp: 40, freq: 0.0052, speed: 0.0044, off: 0.30, a: 0.20 },
      { amp: 55, freq: 0.0038, speed: 0.0060, off: 0.50, a: 0.15 },
      { amp: 32, freq: 0.0068, speed: 0.0034, off: 0.70, a: 0.18 },
      { amp: 68, freq: 0.0029, speed: 0.0026, off: 0.44, a: 0.11 }
    ];
    var t = 0;
    function frame() {
      var ctx = S.ctx, w = S.w, h = S.h;
      t += 1;
      warp += ((mx - 0.5) * 60 - warp) * 0.05;
      ctx.clearRect(0, 0, w, h);
      for (var k = 0; k < waves.length; k++) {
        var wv = waves[k];
        ctx.beginPath();
        for (var x = 0; x <= w; x += 6) {
          var y = h * wv.off + warp + Math.sin(x * wv.freq + t * wv.speed + wv.off * 9) * wv.amp;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(' + accent[0] + ',' + accent[1] + ',' + accent[2] + ',' + wv.a + ')';
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      requestAnimationFrame(frame);
    }
    if (reduce) { frame(); return; }
    frame();
  }

  function activate(node) {
    if (!node || node.__curioFx) return;   // każdą sekcję uruchamiamy tylko raz
    var mode = node.getAttribute('data-curio-fx');
    if (mode === 'net') { node.__curioFx = 1; runNet(node); }
    else if (mode === 'curve') { node.__curioFx = 1; runCurve(node); }
    else if (mode === 'constellation') { node.__curioFx = 1; runConstellation(node); }
  }

  function scan(root) {
    if (root.nodeType !== 1) return;
    if (root.hasAttribute && root.hasAttribute('data-curio-fx')) activate(root);
    if (root.querySelectorAll) {
      var nodes = root.querySelectorAll('[data-curio-fx]');
      for (var i = 0; i < nodes.length; i++) activate(nodes[i]);
    }
  }

  function init() {
    // 1) sekcje, które już są w DOM
    scan(document);
    // 2) sekcje generowane przez JS PÓŹNIEJ (np. render do #app) — łapie je obserwator
    if (window.MutationObserver) {
      var mo = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) scan(added[j]);
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
