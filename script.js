const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'block';
    navbar.classList.add('open');
})

close.addEventListener('click', () => {
    menu.style.display = 'block';
    close.style.display = 'none';
    navbar.classList.remove('open'); 
})