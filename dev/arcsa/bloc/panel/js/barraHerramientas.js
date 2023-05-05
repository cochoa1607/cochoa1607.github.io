document.querySelector(".flecha").addEventListener("click", animateAside);

var menu = document.querySelector(".barra");

function animateAside(){
    menu.classList.toggle("activebarra");
}