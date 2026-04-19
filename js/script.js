const hamburger = document.getElementById('hamburger');

const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  // Toggle menu open/closed and update aria attribute
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    // toggle visual state for hamburger (morph to X)
    hamburger.classList.toggle('open', isOpen);
    // Robust fallback: ensure nav is visible even if CSS specificity hides it
    if (isOpen) {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
    } else {
      navMenu.style.display = '';
      navMenu.style.flexDirection = '';
    }
  });

  // Close menu when a navigation link is clicked (mobile behavior)
  navMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
      // clear inline fallback styles
      navMenu.style.display = '';
      navMenu.style.flexDirection = '';
    }
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
      // clear inline fallback styles
      navMenu.style.display = '';
      navMenu.style.flexDirection = '';
      hamburger.focus();
    }
  });

  // Ensure menu is closed if the viewport is resized to desktop size
  const MOBILE_BREAKPOINT = 768; // matches CSS media query
  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
      // clear inline fallback styles
      navMenu.style.display = '';
      navMenu.style.flexDirection = '';
    }
  });
} else {
  // Elements missing — fail gracefully in environments where script runs before DOM is ready
  console.warn('Navigation elements not found: hamburger or navMenu');
}
