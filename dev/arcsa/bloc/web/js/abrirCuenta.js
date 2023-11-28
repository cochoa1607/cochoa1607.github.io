document.querySelector(".cuentaDentro").addEventListener("click", animateCuenta);

var cuenta = document.querySelector(".cuentaDentro");
var cuentaDos = document.querySelector(".cuentaDentroi");
var cuentaTres = document.querySelector(".cuentaDentroCollapse");
var cuentaCuatro = document.querySelector(".cuentaContainer");

function animateCuenta(){
    cuenta.classList.toggle("activecuentaDentro");
    cuentaDos.classList.toggle("activecuentaDentroi");
    cuentaTres.classList.toggle("activecuentaDentroCollapse");
    cuentaCuatro.classList.toggle("activecuentaContainer");
}