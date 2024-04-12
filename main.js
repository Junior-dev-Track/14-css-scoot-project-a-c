// Effect header
let lastScrollTop = 0; 
 
window.addEventListener("scroll", function() { 
  let currentScroll = window.scrollY || document.documentElement.scrollTop; 
  if (currentScroll > lastScrollTop) { 
    // Scrolling down 
    document.querySelector('header').style.top = '-150px'; 
  } else { 
    // Scrolling up 
    document.querySelector('header').style.top = '0'; 
  } 
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling 
}, false); 

// Hamburger menu (mobile)//*
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links--mobile');
const modal = document.querySelector('.modal');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav__hamburger--active');
  navLinks.classList.toggle('nav__links--active');
  modal.classList.toggle('modal--active');
});


// FAQs
document.addEventListener('DOMContentLoaded', function() {
  // Select all SVG elements with the class 'faq-toggle'
  const toggles = document.querySelectorAll('.FAQs-question');

  // Add a click event listener to each SVG
  toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
          // Find the closest paragraph to the clicked SVG
          // const paragraph = this.closest('.FAQs-question').querySelector('p');
          const paragraph = this.querySelector('p');

          if (!paragraph.style.display) {
            paragraph.style.display = 'none';
        }

          // Toggle the display of the paragraph
          if (paragraph.style.display === 'none') {
              paragraph.style.display = 'block';
          } else {
              paragraph.style.display = 'none';
          }
      });
  });
});