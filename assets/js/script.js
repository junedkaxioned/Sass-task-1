var html = document.querySelector('html');
var hamBurger = document.querySelector('.hamburger');
var navbar = document.querySelector('nav');


// Mobile Navbar Function Start 
hamBurger.addEventListener('click', function () {
  html.classList.toggle('stop-scroll')
  hamBurger.classList.toggle('active')
  navbar.classList.toggle('active')
})
// Mobile Navbar Function End 