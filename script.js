// ── FOOTER YEAR ──
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ── SCROLL PROGRESS BAR ──
var progressEl = document.getElementById('progress');
if (progressEl) {
  window.addEventListener('scroll', function() {
    var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressEl.style.width = scrolled + '%';
  });
}

// ── SCROLL REVEAL ──
function initReveal() {
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
  reveals.forEach(function(el) { obs.observe(el); });
}
initReveal();

// ── SCROLL SPY ──
var spySections = ['hero','experience','projects','skills','education','publications','contact'];
var dots = document.querySelectorAll('.spy-dot');
window.addEventListener('scroll', function() {
  var current = 'hero';
  spySections.forEach(function(id) {
    var el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  dots.forEach(function(d) {
    d.classList.toggle('active', d.dataset.target === current);
  });
});
dots.forEach(function(d) {
  d.addEventListener('click', function() {
    var target = document.getElementById(d.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── EXPERIENCE ACCORDION ──
function toggleExp(card) {
  card.classList.toggle('open');
}

// ── THEME TOGGLE ──
var themeBtn = document.getElementById('theme-btn');
var dark = true;
if (themeBtn) {
  themeBtn.addEventListener('click', function() {
    dark = !dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeBtn.textContent = dark ? '☀' : '🌙';
  });
}

// ── BURGER MENU ──
var burger = document.getElementById('burger');
var navLinks = document.getElementById('nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { navLinks.classList.remove('open'); });
  });
}

// ── 3D TILT on project cards ──
document.querySelectorAll('.project-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = 'perspective(600px) rotateY(' + (x*6) + 'deg) rotateX(' + (-y*6) + 'deg) translateY(-4px)';
  });
  card.addEventListener('mouseleave', function() { card.style.transform = ''; });
});

// ── PHOTO CAROUSEL ──
(function() {
  var cards = document.querySelectorAll('.photo-card');
  var dots  = document.querySelectorAll('.photo-dot');
  if (!cards.length) return;
  var current = 0;
  var timer;

  function goTo(idx) {
    cards[current].classList.remove('active');
    cards[current].classList.add('exiting');
    dots[current].classList.remove('active');
    var prev = current;
    current = (idx + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
    setTimeout(function() { cards[prev].classList.remove('exiting'); }, 900);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() { goTo(current + 1); }, 35000);
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      goTo(parseInt(dot.dataset.idx));
      startTimer();
    });
  });

  startTimer();
})();
