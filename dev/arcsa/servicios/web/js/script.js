// JavaScript para controlar la escritura de texto cambiante
const textos = [
    "Texto 1 que parece estar siendo escrito por una máquina de escribir.",
    "Texto 2 que también parece estar siendo escrito por una máquina de escribir.",
    "Texto 3, otro ejemplo de escritura simulada por una máquina de escribir."
];

const contenedorTexto = document.getElementById("texto-maquina");
let textoActualIndex = 0;

function escribirTexto(texto, index, callback) {
    if (index < texto.length) {
        contenedorTexto.textContent += texto.charAt(index);
        setTimeout(() => {
            escribirTexto(texto, index + 1, callback);
        }, 50); // Velocidad de escritura en milisegundos
    } else {
        setTimeout(callback, 1000); // Espera 1 segundo antes de borrar el texto
    }
}

function borrarTexto(callback) {
    const textoActual = textos[textoActualIndex];
    if (contenedorTexto.textContent.length > 0) {
        contenedorTexto.textContent = textoActual.substring(0, contenedorTexto.textContent.length - 1);
        setTimeout(() => {
            borrarTexto(callback);
        }, 30); // Velocidad de borrado en milisegundos
    } else {
        textoActualIndex = (textoActualIndex + 1) % textos.length;
        setTimeout(callback, 500); // Espera 0.5 segundos antes de escribir el siguiente texto
    }
}

function cicloTexto() {
    escribirTexto(textos[textoActualIndex], 0, () => {
        borrarTexto(cicloTexto);
    });
}

cicloTexto(); // Iniciar la animación