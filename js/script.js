document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-links');

  // Toggle nav menu on small screens
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Close nav menu after clicking a link on small screens
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }
    });
  });
});
