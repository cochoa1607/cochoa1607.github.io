document.querySelector(".verificaDentro").addEventListener("click", animateVerifica);

var verifica = document.querySelector(".verificaDentro");
var verificaDos = document.querySelector(".verificaDentroi");
var verificaTres = document.querySelector(".verificaDentroCollapse");
var verificaCuatro = document.querySelector(".verificaContainer");
var verificaCinco = document.querySelector(".verificaRual");

function animateVerifica() {
    verifica.classList.toggle("activeverificaDentro");
    verificaDos.classList.toggle("activeverificaDentroi");
    verificaTres.classList.toggle("activeverificaDentroCollapse");
    verificaCuatro.classList.toggle("activeverificaContainer");
    verificaCinco.classList.toggle("activeverificaRual");
}