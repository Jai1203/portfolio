// ── FOOTER YEAR (auto-updates) ──
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ── SPLASH — dismiss after 1.8s regardless of load state ──
function dismissSplash() {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('out');
  }, 1800);
}
if (document.readyState === 'complete') {
  dismissSplash();
} else {
  window.addEventListener('load', dismissSplash);
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('out');
  }, 3000);
}

// ── CANVAS BACKGROUND ──
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  const isMobile = () => window.innerWidth < 768;
  let W, H, particles = [], lines = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); init(); });

  const MAX_P = () => isMobile() ? 40 : 80;
  const MAX_L = () => isMobile() ? 15 : 30;

  function rand(a, b) { return Math.random() * (b - a) + a; }

  function init() {
    particles = [];
    lines = [];
    for (let i = 0; i < MAX_P(); i++) {
      particles.push({
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.15, 0.15), vy: rand(-0.1, 0.1),
        r: rand(1, 2.5), alpha: rand(0.2, 0.6),
        hue: Math.random() > 0.5 ? 260 : 180
      });
    }
    for (let i = 0; i < MAX_L(); i++) {
      lines.push({
        x1: rand(0, W), y1: rand(0, H),
        x2: rand(0, W), y2: rand(0, H),
        vx1: rand(-0.08, 0.08), vy1: rand(-0.08, 0.08),
        vx2: rand(-0.08, 0.08), vy2: rand(-0.08, 0.08),
        alpha: rand(0.03, 0.09),
        hue: Math.random() > 0.5 ? 260 : 180
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    const g1 = ctx.createRadialGradient(W * 0.2, H * 0.3, 0, W * 0.2, H * 0.3, W * 0.5);
    g1.addColorStop(0, isDark ? 'rgba(124,106,247,0.04)' : 'rgba(124,106,247,0.03)');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

    const g2 = ctx.createRadialGradient(W * 0.8, H * 0.7, 0, W * 0.8, H * 0.7, W * 0.4);
    g2.addColorStop(0, isDark ? 'rgba(45,212,191,0.03)' : 'rgba(45,212,191,0.02)');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);

    for (const l of lines) {
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.strokeStyle = `hsla(${l.hue},70%,70%,${l.alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      l.x1 += l.vx1; l.y1 += l.vy1; l.x2 += l.vx2; l.y2 += l.vy2;
      if (l.x1 < 0 || l.x1 > W) l.vx1 *= -1;
      if (l.y1 < 0 || l.y1 > H) l.vy1 *= -1;
      if (l.x2 < 0 || l.x2 > W) l.vx2 *= -1;
      if (l.y2 < 0 || l.y2 > H) l.vy2 *= -1;
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},70%,70%,${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      if (p.y < -5) p.y = H + 5;
      if (p.y > H + 5) p.y = -5;
    }

    requestAnimationFrame(draw);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    init(); draw();
  }
})();

// ── PROGRESS BAR ──
const progressEl = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressEl.style.width = scrolled + '%';
});

// ── REVEAL ON SCROLL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── SCROLL SPY ──
const spySections = ['hero', 'experience', 'projects', 'skills', 'education', 'publications', 'contact'];
const dots = document.querySelectorAll('.spy-dot');
window.addEventListener('scroll', () => {
  let current = 'hero';
  spySections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  dots.forEach(d => d.classList.toggle('active', d.dataset.target === current));
});
dots.forEach(d => {
  d.addEventListener('click', () => {
    document.getElementById(d.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── EXP ACCORDION ──
function toggleExp(card) {
  card.classList.toggle('open');
}

// ── THEME TOGGLE ──
const themeBtn = document.getElementById('theme-btn');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀' : '🌙';
});

// ── BURGER MENU ──
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── 3D TILT on project cards ──
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── DOWNLOAD RESUME — links to the pre-generated PDF ──
function downloadResume() {
  const a = document.createElement('a');
  a.href = 'Jai_Chadha_Resume.pdf';
  a.download = 'Jai_Chadha_Resume.pdf';
  a.click();
}

// ── PHOTO CAROUSEL (3D flip, auto-advances every 35s) ──
(function () {
  const cards = document.querySelectorAll('.photo-card');
  const dots = document.querySelectorAll('.photo-dot');
  let current = 0;
  let timer;

  function goTo(idx) {
    cards[current].classList.remove('active');
    cards[current].classList.add('exiting');
    dots[current].classList.remove('active');

    const prev = current;
    current = (idx + cards.length) % cards.length;

    cards[current].classList.add('active');
    dots[current].classList.add('active');

    setTimeout(() => {
      cards[prev].classList.remove('exiting');
    }, 900);
  }

  function next() { goTo(current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 35000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.idx));
      startTimer();
    });
  });

  if (cards.length > 0) startTimer();
})();
