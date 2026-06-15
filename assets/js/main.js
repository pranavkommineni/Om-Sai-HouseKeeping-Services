/* ============================================================
   OM SAI HOUSEKEEPING — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL EFFECT ─────────────────────────────── //
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ─── ACTIVE NAV LINK ──────────────────────────────────── //
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── MOBILE MENU ──────────────────────────────────────── //
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // ─── SCROLL REVEAL ────────────────────────────────────── //
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

  // ─── COUNTER ANIMATION ────────────────────────────────── //
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  // ─── FLOATING PARTICLES (hero) ────────────────────────── //
  const hero = document.querySelector('.hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 60}%;
        top: ${20 + Math.random() * 70}%;
        animation-duration: ${4 + Math.random() * 6}s;
        animation-delay: ${Math.random() * 5}s;
        width: ${1 + Math.random() * 2}px;
        height: ${1 + Math.random() * 2}px;
        opacity: ${0.2 + Math.random() * 0.5};
      `;
      hero.appendChild(p);
    }
  }

  // ─── SMOOTH SCROLL ────────────────────────────────────── //
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── NOTIFICATION UTILITY ─────────────────────────────── //
  window.showNotification = function(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    const n = document.createElement('div');
    n.className = 'notification';
    n.innerHTML = `
      <span class="notification-icon">${icon}</span>
      <span>${message}</span>
      <span class="notification-close" onclick="this.parentElement.remove()">×</span>
    `;
    document.body.appendChild(n);
    setTimeout(() => n.classList.add('show'), 10);
    setTimeout(() => { n.classList.remove('show'); setTimeout(() => n.remove(), 400); }, 5000);
  };

});