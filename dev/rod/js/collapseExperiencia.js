/* Aeropuerto_001 */
document.querySelector(".aeropuerto_001_masInfo").addEventListener("click", masInfoAer001);

var contTexto_001 = document.querySelector(".contenedor-texto");

function masInfoAer001() {
    contTexto_001.classList.toggle("active-contenedor-texto");
}

/* Aeropuerto_002 */
document.querySelector(".aeropuerto_002_masInfo").addEventListener("click", masInfoAer002);

var contTexto_002 = document.querySelector(".contenedor-texto-002");

function masInfoAer002() {
    contTexto_002.classList.toggle("active-contenedor-texto-002");
}
