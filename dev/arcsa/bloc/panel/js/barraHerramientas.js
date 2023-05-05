document.querySelector(".flecha").addEventListener("click", animateAside);

var menu = document.querySelector(".container-all");

function animateAside(){
    menu.classList.toggle("activecontainer-all");
}