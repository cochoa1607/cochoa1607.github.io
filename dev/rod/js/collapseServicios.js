/* Gerencia */
document.querySelector(".gerencia_masInfo").addEventListener("click", masInfo);

var contTexto = document.querySelector(".contenedor-texto");

function masInfo() {
    contTexto.classList.toggle("active-contenedor-texto");
}


/* Auditoria */
document.querySelector(".auditoria_masInfo").addEventListener("click", masInfoAudit);

var contTextoAudit = document.querySelector(".contenedor-texto-audit");

function masInfoAudit() {
    contTextoAudit.classList.toggle("active-contenedor-texto-audit");
}