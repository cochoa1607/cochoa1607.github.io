
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
