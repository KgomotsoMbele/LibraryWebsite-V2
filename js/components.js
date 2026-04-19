// js/components.js

const Components = {
  nav: `
    <header class="navbar">
      <div class="logo-group">
        <a href="/">
          <img src="assets/bookerylogo.png" alt="The Bookery" class="logo-img">
          <h1 class="site-title">The Bookery</h1>
        </a>
      </div>
      
      <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <div class="nav-links-container">
        <ul class="nav-links" id="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="library.html">Library</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </header>
  `,

  footer: `
    <footer class="footer">
      <p>&copy; <span id="year"></span> The Bookery. Free books for Cape Town.</p>
      <div class="footer-links">
        <a href="contact.html">Contact</a>
        <a href="about.html">About</a>
      </div>
    </footer>
  `
};

function loadComponents() {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (navContainer) {
    navContainer.innerHTML = Components.nav;
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = Components.footer;
  }
  
  // Auto-update year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Setup mobile menu after injection
  setupMobileMenu();
}

function setupMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', loadComponents);