document.querySelector(".bars__menu").addEventListener("click", animateMenu);

var menu = document.querySelector(".headerMenu");

function animateMenu(){
    menu.classList.toggle("activeheaderMenu");
}