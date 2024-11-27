const dynamicText = document.getElementById('dynamic-text');

const textArray = [
    "Desarrollador Web",
    "Desarrollador Angular",
    "Project Development Manager",
    "Diseñador de Producto",
    "Diseñador UI/UX"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

// Máquina de escribir
function typeEffect() {
    const currentText = textArray[textIndex];

    if (!deleting) {
        dynamicText.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        dynamicText.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            charIndex = 0;
            setTimeout(typeEffect, 500);
            return;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}

function blinkCursor() {
    dynamicText.classList.toggle('hide-cursor');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
    setInterval(blinkCursor, 500);
});

// PARALLAX
function handleParallax() {
    const scrollPosition = window.scrollY;

    // Imagen superior
    const parallaxTop = document.querySelector('.image-top');
    const topContainer = document.querySelector('.parallax-section-1');
    if (parallaxTop && topContainer) {
        const topOffset = topContainer.getBoundingClientRect().top;
        const topBackgroundPosition = (topOffset * 1) % parallaxTop.offsetWidth;
        parallaxTop.style.backgroundPositionX = `${topBackgroundPosition}px`;
    }

    // Imagen inferior
    const parallaxBottom = document.querySelector('.image-bottom');
    const bottomContainer = document.querySelector('.parallax-section-2');
    if (parallaxBottom && bottomContainer) {
        const bottomOffset = bottomContainer.getBoundingClientRect().top;
        const bottomBackgroundPosition = (-bottomOffset * 1) % parallaxBottom.offsetWidth;
        parallaxBottom.style.backgroundPositionX = `${bottomBackgroundPosition}px`;
    }
}

window.addEventListener('scroll', handleParallax);




