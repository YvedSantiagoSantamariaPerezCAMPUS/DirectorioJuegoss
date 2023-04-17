// Agrega esto a tu archivo JavaScript

window.addEventListener('scroll', function() {
    const element = document.querySelector('.fade-in');
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (position < screenHeight * 0.8) {
      element.classList.add('is-visible');
    }
  });
  