document.querySelector(".cuadroDentro").addEventListener("click", animateConsulta);

var consulta = document.querySelector(".cuadroDentro");
var consultaDos = document.querySelector(".cuadroDentroi");
var consultaTres = document.querySelector(".cuadroDentroCollapse");
var consultaCuatro = document.querySelector(".cuadroContainer");

function animateConsulta(){
    consulta.classList.toggle("activecuadroDentro");
    consultaDos.classList.toggle("activecuadroDentroi");
    consultaTres.classList.toggle("activecuadroDentroCollapse");
    consultaCuatro.classList.toggle("activecuadroContainer");
}