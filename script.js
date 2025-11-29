const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const themeToggler = document.getElementById('theme-toggler');
const branded = document.querySelector('.branded');
const iconPath = document.getElementById("icon-path");

const sunPath =
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.37 3.37 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386z";

const moonPath =
    "M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z";


    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        iconPath.setAttribute("d", moonPath);
    } else {
        iconPath.setAttribute("d", sunPath);
    }

   themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        iconPath.setAttribute("d", moonPath); 
    } else {
        localStorage.setItem("theme", "dark");
        iconPath.setAttribute("d", sunPath);  // Switch to moon
    }
});


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


const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });