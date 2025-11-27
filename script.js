const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const themeToggler = document.getElementById('theme-toggler');
const branded = document.querySelector('.branded');

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'block';
    branded.style.display = 'none';
    themeToggler.style.display = 'none';   
    navbar.classList.add('open');
})

close.addEventListener('click', () => {
    menu.style.display = 'block';
    close.style.display = 'none';
    branded.style.display = 'block';
    themeToggler.style.display = 'block';
    navbar.classList.remove('open'); 
})
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});