
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 6000);
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName('slide');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

showSlides();






// Slide Experiencia

let slideIndexExp = 0;

function showSlidesExp() {
    const slidesExp = document.getElementsByClassName('slide-exp');
    const dotsExp = document.getElementsByClassName('dot-exp');

    for (let i = 0; i < slidesExp.length; i++) {
        slidesExp[i].style.display = 'none';
    }

    slideIndexExp++;

    if (slideIndexExp > slidesExp.length) {
        slideIndexExp = 1;
    }

    slidesExp[slideIndexExp - 1].style.display = 'block';
    setTimeout(showSlidesExp, 6000);
}

function changeSlideExp(n) {
    slideIndexExp += n;
    const slidesExp = document.getElementsByClassName('slide-exp');

    if (slideIndexExp > slidesExp.length) {
        slideIndexExp = 1;
    } else if (slideIndexExp < 1) {
        slideIndexExp = slidesExp.length;
    }

    for (let i = 0; i < slidesExp.length; i++) {
        slidesExp[i].style.display = 'none';
    }

    slidesExp[slideIndexExp - 1].style.display = 'block';
}

showSlidesExp();





// Slide Nuestro Equipo

let slideIndexEquipo = 0;

function showSlidesEquipo() {
    const slidesEquipo = document.getElementsByClassName('slide-equipo');
    const dotsEquipo = document.getElementsByClassName('dot-equipo');

    for (let i = 0; i < slidesEquipo.length; i++) {
        slidesEquipo[i].style.display = 'none';
    }

    slideIndexEquipo++;

    if (slideIndexEquipo > slidesEquipo.length) {
        slideIndexEquipo = 1;
    }

    slidesEquipo[slideIndexEquipo - 1].style.display = 'block';
    setTimeout(showSlidesEquipo, 6000);
}

function changeSlideEquipo(n) {
    slideIndexEquipo += n;
    const slidesEquipo = document.getElementsByClassName('slide-equipo');

    if (slideIndexEquipo > slidesEquipo.length) {
        slideIndexEquipo = 1;
    } else if (slideIndexEquipo < 1) {
        slideIndexEquipo = slidesEquipo.length;
    }

    for (let i = 0; i < slidesEquipo.length; i++) {
        slidesEquipo[i].style.display = 'none';
    }

    slidesEquipo[slideIndexEquipo - 1].style.display = 'block';
}

showSlidesEquipo();

