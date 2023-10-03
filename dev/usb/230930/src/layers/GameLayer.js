// Pantalla principal del juego 
// Herencia de Layer
// Uso this para acceder a las variables y metodos de la clase

class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo, 1280 * 0.5, 720 * 0.5);
        this.objeto = new Objeto(imagenes.objeto, 50, 50);
        this.jugador = new Jugador(50, 50);
    }

    actualizar() {

    }

    dibujar() {
        this.fondo.dibujar();
        this.objeto.dibujar();
        this.jugador.dibujar();
    }
}