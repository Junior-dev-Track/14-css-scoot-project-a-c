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

// FAQs
document.addEventListener('DOMContentLoaded', function() {
  // Select all SVG elements with the class 'faq-toggle'
  const toggles = document.querySelectorAll('.faq-toggle');

  // Add a click event listener to each SVG
  toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
          // Find the closest paragraph to the clicked SVG
          const paragraph = this.closest('.FAQs-question').querySelector('p');

          // Toggle the display of the paragraph
          if (paragraph.style.display === 'none') {
              paragraph.style.display = 'block';
          } else {
              paragraph.style.display = 'none';
          }
      });
  });
});
