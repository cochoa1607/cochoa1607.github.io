window.addEventListener("scroll", function(){
    var menu = document.querySelector(".containerHeader");
    menu.classList.toggle("abajo", window.scrollY > 100);
});

window.addEventListener("scroll", function(){
    var menuBGText = document.querySelector(".containerServicios");
    menuBGText.classList.toggle("abajo", window.scrollY > 80);
});

