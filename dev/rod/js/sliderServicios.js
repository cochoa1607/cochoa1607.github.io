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




/* Revision */

let slideIndexRev = 0;

function showSlidesRev() {
    const slidesRev = document.getElementsByClassName('slideRev');

    for (let i = 0; i < slidesRev.length; i++) {
        slidesRev[i].style.display = 'none';
    }

    slideIndexRev++;

    if (slideIndexRev > slidesRev.length) {
        slideIndexRev = 1;
    }

    slidesRev[slideIndexRev - 1].style.display = 'block';

    setTimeout(showSlidesRev, 6000);
}

function changeSlideRev(n) {
    slideIndexRev += n;
    const slidesRev = document.getElementsByClassName('slideRev');

    if (slideIndexRev > slidesRev.length) {
        slideIndexRev = 1;
    } else if (slideIndexRev < 1) {
        slideIndexRev = slidesRev.length;
    }

    for (let i = 0; i < slidesRev.length; i++) {
        slidesRev[i].style.display = 'none';
    }

    slidesRev[slideIndexRev - 1].style.display = 'block';
}

showSlidesRev();





/* Levantamiento */

let slideIndexLevan = 0;

function showSlidesLevan() {
    const slidesLevan = document.getElementsByClassName('slideLevan');

    for (let i = 0; i < slidesLevan.length; i++) {
        slidesLevan[i].style.display = 'none';
    }

    slideIndexLevan++;

    if (slideIndexLevan > slidesLevan.length) {
        slideIndexLevan = 1;
    }

    slidesLevan[slideIndexLevan - 1].style.display = 'block';

    setTimeout(showSlidesLevan, 6000);
}

function changeSlideLevan(n) {
    slideIndexLevan += n;
    const slidesLevan = document.getElementsByClassName('slideLevan');

    if (slideIndexLevan > slidesLevan.length) {
        slideIndexLevan = 1;
    } else if (slideIndexLevan < 1) {
        slideIndexLevan = slidesLevan.length;
    }

    for (let i = 0; i < slidesLevan.length; i++) {
        slidesLevan[i].style.display = 'none';
    }

    slidesLevan[slideIndexLevan - 1].style.display = 'block';
}

showSlidesLevan();





/* Analisis */

let slideIndexAnalis = 0;

function showSlidesAnalis() {
    const slidesAnalis = document.getElementsByClassName('slideAnalis');

    for (let i = 0; i < slidesAnalis.length; i++) {
        slidesAnalis[i].style.display = 'none';
    }

    slideIndexAnalis++;

    if (slideIndexAnalis > slidesAnalis.length) {
        slideIndexAnalis = 1;
    }

    slidesAnalis[slideIndexAnalis - 1].style.display = 'block';

    setTimeout(showSlidesAnalis, 6000);
}

function changeSlideAnalis(n) {
    slideIndexAnalis += n;
    const slidesAnalis = document.getElementsByClassName('slideAnalis');

    if (slideIndexAnalis > slidesAnalis.length) {
        slideIndexAnalis = 1;
    } else if (slideIndexAnalis < 1) {
        slideIndexAnalis = slidesAnalis.length;
    }

    for (let i = 0; i < slidesAnalis.length; i++) {
        slidesAnalis[i].style.display = 'none';
    }

    slidesAnalis[slideIndexAnalis - 1].style.display = 'block';
}

showSlidesAnalis();