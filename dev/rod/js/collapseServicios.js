/* Gerencia */
document.querySelector(".gerencia_masInfo").addEventListener("click", masInfo);

var contTexto = document.querySelector(".contenedor-texto");

function masInfo() {
    contTexto.classList.toggle("active-contenedor-texto");
}


/* Auditoria */
document.querySelector(".revision_masInfo").addEventListener("click", masInfoRev);

var contTextoRev = document.querySelector(".contenedor-texto-rev");

function masInfoRev() {
    contTextoRev.classList.toggle("active-contenedor-texto-rev");
}



/* Revision */
document.querySelector(".revision_masInfo").addEventListener("click", masInfoRev);

var contTextoRev = document.querySelector(".contenedor-texto-rev");

function masInfoRev() {
    contTextoRev.classList.toggle("active-contenedor-texto-rev");
}



/* Levantamiento */
document.querySelector(".levantamiento_masInfo").addEventListener("click", masInfoLevan);

var contTextoLevan = document.querySelector(".contenedor-texto-levan");

function masInfoLevan() {
    contTextoLevan.classList.toggle("active-contenedor-texto-levan");
}



/* Analisis */
document.querySelector(".analisis_masInfo").addEventListener("click", masInfoAnalis);

var contTextoAnalis = document.querySelector(".contenedor-texto-analis");

function masInfoAnalis() {
    contTextoAnalis.classList.toggle("active-contenedor-texto-analis");
}