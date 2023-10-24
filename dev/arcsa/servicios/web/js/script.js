// app.js
const changingText = document.querySelector('.changing-text');

const words = ['score crediticio comercial?', 'historial Legal?', 'reputación con tus proveedores?'];
let wordIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < words[wordIndex].length) {
        changingText.textContent += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (letterIndex > 0) {
        changingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = wordIndex < words.length - 1 ? wordIndex + 1 : 0;
        setTimeout(type, 100);
    }
}

setTimeout(type, 500);
