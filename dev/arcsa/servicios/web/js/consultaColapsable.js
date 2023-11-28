document.querySelector(".cajaBoton").addEventListener("click", animContenedor);

var colapsable = document.querySelector(".contenedorColapsable");

function animContenedor() {
    colapsable.classList.toggle("activecontenedorColapsable");
}