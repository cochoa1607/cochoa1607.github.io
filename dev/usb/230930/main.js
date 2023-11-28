// Archivo que contiene la logica principal que lanzara la aplicacion
// Canvas y contexto de canvas

var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

// Capas 
// Crear capa principal mediante la variable gameLayer

var gameLayer;

// Inicio de capas y bucle del juego
// Permite decidir cuando iniciar el juego

function iniciarJuego() {
    gameLayer = new GameLayer();

    // Generar intervalo para actualizar, mover y dibujar los elementos del juego
    // Uso de una funcion de JS que se llama setInterval (fuction, milisegundos)

    setInterval(loop, 1000 / 50);
}

// iniciarJuego();

function loop() {
    console.log("loop activo -->");
    gameLayer.actualizar();
    gameLayer.dibujar();
}


