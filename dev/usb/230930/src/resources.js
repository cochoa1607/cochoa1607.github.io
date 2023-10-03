var cache = [];

var imagenes = {
    jugador: "./resources/jugador.png",
    fondo: "./resources/fondo.png",
    elemento01: "./resources/elemento01.png",
    elemento02: "./resources/elemento02.png",
    elemento03: "./resources/elemento03.png",
    elemento04: "./resources/elemento04.png",
    elemento05: "./resources/elemento05.png",
    elemento06: "./resources/elemento06.png",
    elemento07: "./resources/elemento07.png",
    elemento08: "./resources/elemento08.png",
    elemento09: "./resources/elemento09.png",
    elemento10: "./resources/elemento10.png",
    elemento11: "./resources/elemento11.png",
    elemento12: "./resources/elemento12.png",
    elemento13: "./resources/elemento13.png",
    elemento14: "./resources/elemento14.png",
    elemento15: "./resources/elemento15.png",
    elemento16: "./resources/elemento16.png",
    elemento17: "./resources/elemento17.png",
    elemento18: "./resources/elemento18.png",
    elemento19: "./resources/elemento19.png",
    elemento20: "./resources/elemento20.png",
    elemento21: "./resources/elemento21.png",
    elemento22: "./resources/elemento22.png",
    elemento23: "./resources/elemento23.png",
    elemento24: "./resources/elemento24.png",
    elemento25: "./resources/elemento25.png",
    elemento26: "./resources/elemento26.png",
    elemento27: "./resources/elemento27.png",
    elemento28: "./resources/elemento28.png",
    elemento29: "./resources/elemento29.png",
};

var rutasImagenes = Object.values(imagenes);
cargarImagenes(0);

function cargarImagenes(i) {
    cache[rutasImagenes[i]] = new Image();
    cache[rutasImagenes[i]].src = rutasImagenes[i];
    cache[rutasImagenes[i]].onload = function () {
        if (i < rutasImagenes.length - 1) {
            i++;
            cargarImagenes(i);
        } else {
            iniciarJuego();
        }
    }
}
