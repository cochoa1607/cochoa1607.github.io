document.querySelector(".gerencia_masInfo").addEventListener("click", masInfo);

var contTexto = document.querySelector(".contenedor-texto");

function masInfo() {
    contTexto.classList.toggle("active-contenedor-texto");
}