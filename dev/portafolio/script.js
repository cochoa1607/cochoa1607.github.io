// Referencia al elemento donde cambia el texto
const dynamicText = document.getElementById('dynamic-text');

// Textos que aparecerán
const textArray = [
    "Desarrollador Web",
    "Desarrollador Angular",
    "Project Development Manager",
    "Diseñador de Producto",
    "Diseñador UI/UX"
];

// Configuración del efecto
let textIndex = 0;
let charIndex = 0;
let deleting = false;

// Función para el efecto de máquina de escribir
function typeEffect() {
    const currentText = textArray[textIndex];

    if (!deleting) {
        // Añadiendo caracteres
        dynamicText.textContent = currentText.slice(0, charIndex++); // Escribe el texto
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); // Pausa antes de borrar
            return;
        }
    } else {
        // Borrando caracteres
        dynamicText.textContent = currentText.slice(0, charIndex--); // Borra el texto
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Pasar al siguiente texto
            charIndex = 0; // Reiniciar índice de caracteres
            setTimeout(typeEffect, 500); // Pausa antes de empezar a escribir el nuevo texto
            return;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}

// Cursor parpadeante
function blinkCursor() {
    dynamicText.classList.toggle('hide-cursor');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000); // Inicia el efecto de máquina de escribir
    setInterval(blinkCursor, 500); // Cursor parpadeante
});


/* // Función para el efecto de máquina de escribir
function typeEffect() {
    const currentText = textArray[textIndex];

    if (!deleting) {
        // Añadiendo caracteres
        dynamicText.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); // Pausa antes de borrar
            return;
        }
    } else {
        // Borrando caracteres
        dynamicText.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Pasar al siguiente texto
            charIndex = 0; // Reiniciar índice de caracteres
            setTimeout(typeEffect, 500); // Pausa antes de empezar a escribir el nuevo texto
            return;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
}); */

// Scroll Horizontal
function handleParallax() {
    const scrollPosition = window.scrollY;

    // Imagen superior: se mueve de izquierda a derecha
    const parallaxTop = document.querySelector('.image-top');
    const topContainer = document.querySelector('.parallax-section-1');
    if (parallaxTop && topContainer) {
        const topOffset = topContainer.getBoundingClientRect().top;
        // Usar background-position para efecto continuo
        const topBackgroundPosition = (topOffset * 0.5) % parallaxTop.offsetWidth; // Movimiento infinito
        parallaxTop.style.backgroundPositionX = `${topBackgroundPosition}px`;
    }

    // Imagen inferior: se mueve de derecha a izquierda
    const parallaxBottom = document.querySelector('.image-bottom');
    const bottomContainer = document.querySelector('.parallax-section-2');
    if (parallaxBottom && bottomContainer) {
        const bottomOffset = bottomContainer.getBoundingClientRect().top;
        // Usar background-position para efecto continuo
        const bottomBackgroundPosition = (-bottomOffset * 0.5) % parallaxBottom.offsetWidth; // Movimiento infinito
        parallaxBottom.style.backgroundPositionX = `${bottomBackgroundPosition}px`;
    }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', handleParallax);



