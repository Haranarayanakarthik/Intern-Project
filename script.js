
  // Scroll to section on navigation link click
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Toggle navigation bar color on scroll
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      nav.style.backgroundColor = 'black';
    }
  });

  // Form submission handling
  document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
  });

