const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  if (navbar.style.display === 'flex' || navbar.style.display === '') {
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column'; // stack links
  } else {
    navbar.style.display = 'none';
  }
});