/**
 * Full-Screen Liquid-Glass Navigation Controller
 * Handles open/close lifecycle, accessible inert management, and keyboard traps.
 */
export function initNavigation() {
  const menuBtn = document.querySelector('.menu-trigger-btn');
  const navLayer = document.querySelector('.nav-fullscreen-layer');
  const navViewport = document.querySelector('.nav-glass-viewport');
  const navContainer = document.querySelector('.nav-inner-container');
  const identityCard = document.getElementById('identity-card');
  const microFooter = document.querySelector('.micro-footer');
  const statusBadge = document.querySelector('.status-badge-pill');

  if (!menuBtn || !navLayer) return;

  let isOpen = false;

  function openNav() {
    if (isOpen) return;
    isOpen = true;

    // 1. Trigger button morphs into 'X'
    menuBtn.setAttribute('aria-expanded', 'true');

    // 2. Fullscreen liquid-glass layer expands
    navLayer.setAttribute('data-open', 'true');
    navLayer.setAttribute('aria-hidden', 'false');

    // 3. Body state & scroll lock
    document.body.classList.add('nav-open');
    document.body.style.overflow = 'hidden';

    // 4. Trap accessibility focus & apply inert to non-navigation card elements
    if (identityCard) identityCard.inert = true;
    if (microFooter) microFooter.inert = true;
    if (statusBadge) statusBadge.inert = true;

    // 5. Focus first navigation link after expansion starts
    setTimeout(() => {
      const firstLink = navLayer.querySelector('.nav-editorial-link');
      if (firstLink) firstLink.focus();
    }, 180);
  }

  function closeNav() {
    if (!isOpen) return;
    isOpen = false;

    // 1. Trigger button morphs back to hamburger
    menuBtn.setAttribute('aria-expanded', 'false');

    // 2. Fullscreen liquid-glass layer collapses smoothly
    navLayer.setAttribute('data-open', 'false');
    navLayer.setAttribute('aria-hidden', 'true');

    // 3. Body state & scroll restore
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';

    // 4. Remove inert
    if (identityCard) identityCard.inert = false;
    if (microFooter) microFooter.inert = false;
    if (statusBadge) statusBadge.inert = false;

    // 5. Return focus to trigger button
    menuBtn.focus();
  }

  // Toggle button click
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when clicking any primary navigation link & smooth scroll to target
  const editorialLinks = navLayer.querySelectorAll('.nav-editorial-link');
  editorialLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      closeNav();
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 240);
        }
      }
    });
  });

  // Close when clicking secondary action buttons
  const actionBtns = navLayer.querySelectorAll('.nav-action-btn');
  actionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeNav();
    });
  });

  // Light-dismiss: click outside the inner content container on tablet/desktop
  navViewport.addEventListener('click', (e) => {
    if (navContainer && !navContainer.contains(e.target)) {
      closeNav();
    }
  });

  // Escape key closes navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeNav();
    }
  });

  return { openNav, closeNav };
}
