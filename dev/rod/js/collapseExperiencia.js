/* Aeropuerto_001 */
document.querySelector(".aeropuerto_001_masInfo").addEventListener("click", masInfoAer001);

var contTexto = document.querySelector(".contenedor-texto");

function masInfoAer001() {
    contTexto.classList.toggle("active-contenedor-texto");
}
