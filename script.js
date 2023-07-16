// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle active class on navigation links
  document.querySelectorAll('nav a').forEach(navLink => {
    navLink.addEventListener('click', function () {
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Add scroll event listener to highlight active section in navigation
  window.addEventListener('scroll', function () {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  