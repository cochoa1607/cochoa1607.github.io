//Scroll menu
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".containerLogo");
  menu.classList.toggle("activecontainerLogo", window.scrollY > 100);

});

//Lista
let imageList = document.getElementById('image-list').getElementsByTagName('li');
let currentIndex = 0;

function changeImageStyle() {
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].querySelector('div').classList.remove('active');
  }

  imageList[currentIndex].querySelector('div').classList.add('active');

  currentIndex = (currentIndex + 1) % imageList.length;
};

setInterval(changeImageStyle, 4000);
changeImageStyle();


//Slider
const sliderTexts = document.querySelectorAll('.slider-text');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let actualIndex = 0;

function showSlide(index) {
  sliderTexts.forEach((text, i) => {
    if (i === index) {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });
}

function prevSlide() {
  actualIndex--;
  if (actualIndex < 0) {
    actualIndex = sliderTexts.length - 1;
  }
  showSlide(actualIndex);
}

function nextSlide() {
  actualIndex++;
  if (actualIndex >= sliderTexts.length) {
    actualIndex = 0;
  }
  showSlide(actualIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(actualIndex);


//Hover
document.addEventListener("DOMContentLoaded", function () {

  //Duplicar 1/4
  var elemento = document.getElementById("ventajasHover");
  var elementoDos = document.getElementById("ventajasHoverDos");
  var elementoTres = document.getElementById("ventajasHoverTres");
  var elementoCuatro = document.getElementById("ventajasHoverCuatro");
  var elementoCinco = document.getElementById("ventajasHoverCinco");
  var elementoSeis = document.getElementById("ventajasHoverSeis");
  var elementoSiete = document.getElementById("ventajasHoverSiete");
  var elementoOcho = document.getElementById("ventajasHoverOcho");

  //Duplicar 2/4
  elemento.className = "estiloInicial";
  elementoDos.className = "estiloInicial";
  elementoTres.className = "estiloInicial";
  elementoCuatro.className = "estiloInicial";
  elementoCinco.className = "estiloInicial";
  elementoSeis.className = "estiloInicial";
  elementoSiete.className = "estiloInicial";
  elementoOcho.className = "estiloInicial";

  //Duplicar 3/4
  elemento.addEventListener("mouseover", function () {
    elemento.className = "estiloHover";
  });
  elementoDos.addEventListener("mouseover", function () {
    elementoDos.className = "estiloHover";
  });
  elementoTres.addEventListener("mouseover", function () {
    elementoTres.className = "estiloHover";
  });
  elementoCuatro.addEventListener("mouseover", function () {
    elementoCuatro.className = "estiloHover";
  });
  elementoCinco.addEventListener("mouseover", function () {
    elementoCinco.className = "estiloHover";
  });
  elementoSeis.addEventListener("mouseover", function () {
    elementoSeis.className = "estiloHover";
  });
  elementoSiete.addEventListener("mouseover", function () {
    elementoSiete.className = "estiloHover";
  });
  elementoOcho.addEventListener("mouseover", function () {
    elementoOcho.className = "estiloHover";
  });

  //Duplicar 4/4
  elemento.addEventListener("mouseout", function () {
    elemento.className = "estiloInicial";
  });
  elementoDos.addEventListener("mouseout", function () {
    elementoDos.className = "estiloInicial";
  });
  elementoTres.addEventListener("mouseout", function () {
    elementoTres.className = "estiloInicial";
  });
  elementoCuatro.addEventListener("mouseout", function () {
    elementoCuatro.className = "estiloInicial";
  });
  elementoCinco.addEventListener("mouseout", function () {
    elementoCinco.className = "estiloInicial";
  });
  elementoSeis.addEventListener("mouseout", function () {
    elementoSeis.className = "estiloInicial";
  });
  elementoSiete.addEventListener("mouseout", function () {
    elementoSiete.className = "estiloInicial";
  });
  elementoOcho.addEventListener("mouseout", function () {
    elementoOcho.className = "estiloInicial";
  });

});

