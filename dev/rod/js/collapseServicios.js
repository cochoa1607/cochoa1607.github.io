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



/* Due Diligence */
document.querySelector(".diligence_masInfo").addEventListener("click", masInfoDilig);

var contTextoDilig = document.querySelector(".contenedor-texto-dilig");

function masInfoDilig() {
    contTextoDilig.classList.toggle("active-contenedor-texto-dilig");
}



/* Gestion */
document.querySelector(".gestion_masInfo").addEventListener("click", masInfoGest);

var contTextoGest = document.querySelector(".contenedor-texto-gest");

function masInfoGest() {
    contTextoGest.classList.toggle("active-contenedor-texto-gest");
}