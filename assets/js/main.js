import { siteData } from './config.js';
import { initContentRenderer } from './render.js';
import { initNavigation } from './navigation.js';
import { downloadVCard } from './vcard.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hydrate UI with centralized content/data
  initContentRenderer();

  // 2. Initialize Scroll-Triggered Blur-to-Sharp Reveals
  initScrollReveals();

  // 3. Initialize Navigation Layer
  initNavigation();

  // 3. Wire up Save Contact / vCard buttons
  const vcardTriggers = document.querySelectorAll('.js-save-vcard');
  vcardTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadVCard();
    });
  });

  // 4. Reactive Liquid-Glass Sheen & Subtle 3D Tilt
  initReactiveGlassCard();

  // 5. Desktop Pointer-Reactive Light for Fullscreen Nav Layer
  initReactiveNavLayer();

  // 6. Reactive Liquid-Glass Sheen for Contact Surface
  initReactiveContactCard();
});

/**
 * Attaches dynamic specular highlight to the NFC Glass Card.
 * Avoids aggressive 3D perspective tilt to keep text razor-sharp and mobile scrolling native.
 */
function initReactiveGlassCard() {
  const card = document.querySelector('.nfc-card');
  if (!card) return;

  function updateSheen(clientX, clientY) {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    card.style.setProperty('--sheen-x', `${xPercent.toFixed(1)}%`);
    card.style.setProperty('--sheen-y', `${yPercent.toFixed(1)}%`);
  }

  function resetSheen() {
    card.style.setProperty('--sheen-x', '50%');
    card.style.setProperty('--sheen-y', '20%');
  }

  // Pointer / Mouse events on desktop (protect mobile scrolling from gesture interference)
  card.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    updateSheen(e.clientX, e.clientY);
  });

  card.addEventListener('pointerleave', resetSheen);
}

/**
 * Attaches dynamic pointer-reactive light / refraction to the full-screen liquid glass nav layer.
 */
function initReactiveNavLayer() {
  const navLayer = document.querySelector('.nav-fullscreen-layer');
  if (!navLayer) return;

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    if (navLayer.getAttribute('data-open') === 'true') {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      navLayer.style.setProperty('--nav-sheen-x', `${xPercent.toFixed(1)}%`);
      navLayer.style.setProperty('--nav-sheen-y', `${yPercent.toFixed(1)}%`);
    }
  });
}

/**
 * Sets up GPU-accelerated IntersectionObserver for scroll-triggered blur-to-sharp reveals.
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-blur');
  if (revealElements.length === 0) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
        // Free GPU memory after the 650ms spring transition completes
        setTimeout(() => {
          entry.target.style.willChange = 'auto';
        }, 700);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Attaches dynamic specular highlight to the Contact Glass Surface.
 */
function initReactiveContactCard() {
  const card = document.querySelector('.contact-glass-surface');
  if (!card) return;

  function updateSheen(clientX, clientY) {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    card.style.setProperty('--contact-sheen-x', `${xPercent.toFixed(1)}%`);
    card.style.setProperty('--contact-sheen-y', `${yPercent.toFixed(1)}%`);
  }

  function resetSheen() {
    card.style.setProperty('--contact-sheen-x', '50%');
    card.style.setProperty('--contact-sheen-y', '20%');
  }

  card.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    updateSheen(e.clientX, e.clientY);
  });

  card.addEventListener('pointerleave', resetSheen);
}


