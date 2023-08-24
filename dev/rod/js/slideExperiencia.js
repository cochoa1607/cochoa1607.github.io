/* Aeropuerto */

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName('slide');

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




/* Aeropuerto_002 */

let slideIndex_002 = 0;

function showSlides_002() {
    const slides_002 = document.getElementsByClassName('slide-002');

    for (let i = 0; i < slides_002.length; i++) {
        slides_002[i].style.display = 'none';
    }

    slideIndex_002++;

    if (slideIndex_002 > slides_002.length) {
        slideIndex_002 = 1;
    }

    slides_002[slideIndex_002 - 1].style.display = 'block';

    setTimeout(showSlides_002, 6000);
}

function changeSlide_002(n) {
    slideIndex_002 += n;
    const slides_002 = document.getElementsByClassName('slide-002');

    if (slideIndex_002 > slides_002.length) {
        slideIndex_002 = 1;
    } else if (slideIndex_002 < 1) {
        slideIndex_002 = slides_002.length;
    }

    for (let i = 0; i < slides_002.length; i++) {
        slides_002[i].style.display = 'none';
    }

    slides_002[slideIndex_002 - 1].style.display = 'block';
}

showSlides_002();



/* Aeropuerto_003 */

let slideIndex_003 = 0;

function showSlides_003() {
    const slides_003 = document.getElementsByClassName('slide-003');

    for (let i = 0; i < slides_003.length; i++) {
        slides_003[i].style.display = 'none';
    }

    slideIndex_003++;

    if (slideIndex_003 > slides_003.length) {
        slideIndex_003 = 1;
    }

    slides_003[slideIndex_003 - 1].style.display = 'block';

    setTimeout(showSlides_003, 6000);
}

function changeSlide_003(n) {
    slideIndex_003 += n;
    const slides_003 = document.getElementsByClassName('slide-003');

    if (slideIndex_003 > slides_003.length) {
        slideIndex_003 = 1;
    } else if (slideIndex_003 < 1) {
        slideIndex_003 = slides_003.length;
    }

    for (let i = 0; i < slides_003.length; i++) {
        slides_003[i].style.display = 'none';
    }

    slides_003[slideIndex_003 - 1].style.display = 'block';
}

showSlides_003();