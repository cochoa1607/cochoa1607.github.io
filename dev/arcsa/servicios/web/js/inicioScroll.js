window.addEventListener("scroll", function () {
    var menu = document.querySelector(".contenedorBanner");
    menu.classList.toggle("abajo", window.scrollY > 120);
});

window.addEventListener("scroll", function () {
    var vid = document.querySelector(".vid");
    vid.classList.toggle("abajo", window.scrollY > 120);
});

window.addEventListener("scroll", function () {
    var menuBGText = document.querySelector(".texto");
    menuBGText.classList.toggle("abajo", window.scrollY > 80);
});

