function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""

    if (jugada == 1) {
        resultado = "Piedra"
    } else if (jugada == 2) {
        resultado = "Papel"
    } else if (jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "MAL ELEGIDO"
    }

    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {

    let pc = aleatorio(1, 3)

    jugador = prompt("Elige: 1 Piedra, 2 papel, 3 Tijera");

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE

    if (pc == jugador) {
        alert("Empate")
    } else if (jugador == 1 && pc == 3) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Prediste " + perdidas + " veces")

