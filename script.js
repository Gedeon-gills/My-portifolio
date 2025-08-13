const menu = document.getElementById('menu');
  const navLinks = document.getElementById('navLinks');

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });