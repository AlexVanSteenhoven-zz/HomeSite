const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar li');

  burger.addEventListener('click', () => {
    // Toggle navigation bar
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });

    // Animate Burger
    burger.classList.toggle('toggle');
  });
};

navSlide();
