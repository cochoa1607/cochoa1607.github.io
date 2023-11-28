document.querySelector(".flecha").addEventListener("click", animateAside);

var aside = document.querySelector(".container-all");

function animateAside(){
    aside.classList.toggle("activecontainer-all");
}