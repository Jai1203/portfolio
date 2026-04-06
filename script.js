// ───────────── GLOBAL INIT ─────────────
document.addEventListener("DOMContentLoaded", function () {

  // ── FORCE REVEAL (PREVENT BLANK SCREEN) ──
  document.querySelectorAll(".reveal").forEach(function(el) {
    el.classList.add("visible");
  });

  // ── FOOTER YEAR ──
  var year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();

  // ── SCROLL PROGRESS BAR ──
  var progressEl = document.getElementById("progress");
  if (progressEl) {
    window.addEventListener("scroll", function () {
      var total = document.documentElement.scrollHeight - window.innerHeight;
      var scrolled = total > 0 ? (window.scrollY / total) * 100 : 0;
      progressEl.style.width = scrolled + "%";
    });
  }

  // ── BURGER MENU ──
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // ── THEME TOGGLE ──
  var themeBtn = document.getElementById("theme-btn");
  var dark = true;

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      dark = !dark;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      themeBtn.textContent = dark ? "☀" : "🌙";
    });
  }

  // ── DISABLE HEAVY EFFECTS ON MOBILE ──
  if (window.innerWidth > 768) {
    document.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform =
          "perspective(600px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  // ── PHOTO CAROUSEL ──
  (function () {
    var cards = document.querySelectorAll(".photo-card");
    var dots = document.querySelectorAll(".photo-dot");

    if (!cards.length) return;

    var current = 0;
    var timer;

    function goTo(idx) {
      cards[current].classList.remove("active");
      dots[current].classList.remove("active");

      current = (idx + cards.length) % cards.length;

      cards[current].classList.add("active");
      dots[current].classList.add("active");
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(function () {
        goTo(current + 1);
      }, 4000);
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.dataset.idx));
        startTimer();
      });
    });

    startTimer();
  })();
});


// ───────────── SPLASH FIX ─────────────
window.addEventListener("load", function () {
  var splash = document.getElementById("splash");

  if (splash) {
    splash.style.opacity = "0";

    setTimeout(function () {
      splash.style.display = "none";
    }, 500);
  }
});