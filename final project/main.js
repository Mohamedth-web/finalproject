const hamburger=document.querySelector('.fa-bars');
const nav=document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
})