const dynamicText = document.getElementById('dynamic-text');

const textArray = [
    "UX Researcher",
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

// FIGMA
document.addEventListener("DOMContentLoaded", () => {
    const iframes = document.querySelectorAll(".iframe-wrapper iframe");
    
    // Función para cargar progresivamente los iframes
    function loadIframe(index) {
        if (index >= iframes.length) return; // Detener si no hay más iframes
        
        const iframe = iframes[index];
        const src = iframe.getAttribute("data-src"); // Leer la fuente desde data-src
        if (src) {
            iframe.src = src; // Asignar la fuente al iframe
            iframe.onload = () => loadIframe(index + 1); // Cargar el siguiente iframe al terminar
        }
    }
    
    // Iniciar la carga con el primer iframe
    loadIframe(0);
});


// SLIDER PROYECTOS
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel('#projectsCarousel', {
        interval: 5000, // Cambiar slide automáticamente cada 5 segundos
        pause: 'hover' // Pausa el slider al pasar el mouse encima
    });
});
