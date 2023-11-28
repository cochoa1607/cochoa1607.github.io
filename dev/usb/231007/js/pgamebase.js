// =================================== 4 etapas ===================================
// 1) Variables y funaciones comunes a todas las clases
// 2) Las clases que componen a nuestro videojuego (logica de juego)

class MainScene extends Phaser.Scene {
    constructor() {
        super('gameScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

class Level extends Phaser.Scene {
    constructor() {
        super('lavelScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

class Mode extends Phaser.Scene {
    constructor() {
        super('modeScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

class EndGame extends Phaser.Scene {
    constructor() {
        super('endScene');
    }

    preload() {
        // Se ejecuta en primer lugar solo una vez
        // Se ejecuta la multimedia
    }

    create() {
        // Se ejecuta en segundo lugar solo una vez
        // Se ejecuta la logica del videjuego
    }

    update() {
        // Se ejecuta en tercer lugar en loop
        // Se ejecuta la actualizacion de multimedia
    }
}

// 3) Confoiiguracion base del videojuego

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // Array que indica el orden de visualizacion del vj
    scene: [MainScene, Menu, Level, Mode, Controls, EndGame],
    scale: {
        mode: Phaser.FIT
    }
}

// 4) Inicializacion de PHASER

new Phaser.Game(config);