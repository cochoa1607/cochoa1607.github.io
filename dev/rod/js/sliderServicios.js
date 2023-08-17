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


/* Auditoría */

let slideIndexAudit = 0;

function showSlidesAudit() {
    const slidesAudit = document.getElementsByClassName('slideAudit');

    for (let i = 0; i < slidesAudit.length; i++) {
        slidesAudit[i].style.display = 'none';
    }

    slideIndexAudit++;

    if (slideIndexAudit > slidesAudit.length) {
        slideIndexAudit = 1;
    }

    slidesAudit[slideIndexAudit - 1].style.display = 'block';

    setTimeout(showSlidesAudit, 6000);
}

function changeSlideAudit(n) {
    slideIndexAudit += n;
    const slidesAudit = document.getElementsByClassName('slideAudit');

    if (slideIndexAudit > slidesAudit.length) {
        slideIndexAudit = 1;
    } else if (slideIndexAudit < 1) {
        slideIndexAudit = slidesAudit.length;
    }

    for (let i = 0; i < slidesAudit.length; i++) {
        slidesAudit[i].style.display = 'none';
    }

    slidesAudit[slideIndexAudit - 1].style.display = 'block';
}

showSlidesAudit();