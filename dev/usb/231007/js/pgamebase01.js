// =================================== 4 etapas ===================================
// 1) Variables y funaciones comunes a todas las clases
// 2) Las clases que componen a nuestro videojuego (logica de juego)

class MainScene extends Phaser.Scene {
    constructor() {
        super('gameScene');
    }

    preload() {
        this.preload.baseURL = './';
        this.load.image('desierto', 'img/background.png')
        this.load.image('mario', 'img/mario.png')
        this.load.image('personaje01', 'img/personaje01.png')
        this.load.image('platform01', 'img/platform01.png')
        this.load.image('platform02', 'img/platform02.png')
        this.load.image('roca', 'img/roca.png')
        this.load.image('uvas', 'img/uvas.png')
    }

    create() {
        this.add.image(640, 360, 'desierto');
        var platforms = this.physics.add.staticGroup();
        platforms.create(420, 400, 'platform01');
        var plantas = this.physics.add.staticGroup();
        plantas.create(1010, 100, 'uvas');
        var platforms02 = this.physics.add.staticGroup();
        platforms02.create(1010, 225, 'platform01');
        var piedras = this.physics.add.staticGroup();
        piedras.create(600, 206, 'roca');
        var piedras02 = this.physics.add.staticGroup();
        piedras02.create(750, 206, 'roca');
        var platforms03 = this.physics.add.staticGroup();
        platforms03.create(700, 300, 'platform02');
        var personaje = this.physics.add.staticGroup();
        personaje.create(260, 475, 'mario');
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
    width: 1280,
    height: 720,
    // Array que indica el orden de visualizacion del vj
    scene: [MainScene, Menu, Level, Mode, Controls, EndGame],
    scale: {
        mode: Phaser.FIT
    }, physics: {
        default: 'arcade',
        arcsade: {
            debug: false,
            gravity: {
                y: 300,
            }
        }
    }
}

// 4) Inicializacion de PHASER

new Phaser.Game(config);