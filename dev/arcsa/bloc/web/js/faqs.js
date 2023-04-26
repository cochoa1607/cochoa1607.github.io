document.querySelector(".faqDentro").addEventListener("click", animateFaq);

var faq = document.querySelector(".faqDentro");
var faqi = document.querySelector(".faqDentroi");
var faqColl = document.querySelector(".faqDentroCollapse");

function animateFaq() {
    faq.classList.toggle("activefaqDentro");
    faqi.classList.toggle("activefaqDentroi");
    faqColl.classList.toggle("activefaqDentroCollapse");
}


document.querySelector(".faqDos").addEventListener("click", animateFaqDos);

var faqDos = document.querySelector(".faqDos");
var faqDosi = document.querySelector(".faqDosDentroi");
var faqDosColl = document.querySelector(".faqDosDentroCollapse");

function animateFaqDos() {

    faqDos.classList.toggle("activefaqDos");
    faqDosi.classList.toggle("activefaqDosDentroi");
    faqDosColl.classList.toggle("activefaqDosDentroCollapse");

}


document.querySelector(".faqTres").addEventListener("click", animateFaqTres);

var faqTres = document.querySelector(".faqTres");
var faqTresi = document.querySelector(".faqTresDentroi");
var faqTresColl = document.querySelector(".faqTresDentroCollapse");

function animateFaqTres() {

    faqTres.classList.toggle("activefaqTres");
    faqTresi.classList.toggle("activefaqTresDentroi");
    faqTresColl.classList.toggle("activefaqTresDentroCollapse");

}

document.querySelector(".faqCuatro").addEventListener("click", animateFaqCuatro);

var faqCuatro = document.querySelector(".faqCuatro");
var faqCuatroi = document.querySelector(".faqCuatroDentroi");
var faqCuatroColl = document.querySelector(".faqCuatroDentroCollapse");

function animateFaqCuatro() {

    faqCuatro.classList.toggle("activefaqCuatro");
    faqCuatroi.classList.toggle("activefaqCuatroDentroi");
    faqCuatroColl.classList.toggle("activefaqCuatroDentroCollapse");

}