// Crear player 2
// Actualizar movimiento de cursores
// Animación de personajes

var level = 1;
var playerMulti = 2;
var player = "";
var player2 = "";
var stars = "";

class MainScene extends Phaser.Scene {
    constructor() {
        super('gameScene');
    }

    preload() {
        this.load.baseURL = './';
        this.load.image('fondo', './img/background.png');
        this.load.image('plarga', './img/plataformal.png');
        this.load.image('pcorta', './img/plataformac.png');
        this.load.image('estrella', './img/estrella.png');
        this.load.image('bomba', './img/bomba.png');
        this.load.image('controlPlayer1', './img/keysp01.png');

        this.load.spritesheet('male', './img/personaje01.png', { frameWidth: 32, frameHeight: 50 });
        this.load.spritesheet('zmale', './img/personaje02.png', { frameWidth: 32, frameHeight: 50 });
    }

    create() {
        this.add.image(640, 360, 'fondo');
        // Piso de nivel
        var platforms = this.physics.add.staticGroup();
        platforms.create(184, 686, 'plarga');
        platforms.create(368, 686, 'plarga');
        platforms.create(552, 686, 'plarga');
        platforms.create(736, 686, 'plarga');
        platforms.create(920, 686, 'plarga');
        platforms.create(1104, 686, 'plarga');

        // Barras flotantes
        if (level == 1) {
            platforms.create(500, 500, 'plarga');
            platforms.create(800, 350, 'pcorta');
            platforms.create(1000, 250, 'pcorta');
        } else if (level == 2) {
            platforms.create(770, 180, 'plarga');
            platforms.create(500, 350, 'pcorta');
            platforms.create(300, 500, 'pcorta');
            platforms.create(1100, 400, 'pcorta');
        }

        player = this.physics.add.sprite(1200, 50, 'male').setScale(1.5);
        // obligar a que permanezca en los límites de la escena
        player.setCollideWorldBounds(true);
        player.setBounce(0.2);
        this.physics.add.collider(player, platforms);

        if (playerMulti == 2) {
            player2 = this.physics.add.sprite(1250, 50, 'zmale').setScale(1.5);
            // obligar a que permanezca en los límites de la escena
            player2.setCollideWorldBounds(true);
            player2.setBounce(0.2);
            this.physics.add.collider(player2, platforms);
        }

        // Estrellas
        stars = this.physics.add.group({
            key: 'estrella',
            repeat: 8,
            setXY: { x: 350, y: 0, stepX: 100 }
        });

        this.physics.add.collider(stars, platforms);
        stars.children.iterate(function (child) {
            child.setBounce(0.3);
        });

        // dar etiquetas para cada animación por ejemplo izquierda (movimiento a la izquierda)
        // izquierda
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('male', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        // girar
        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('male', { start: 3, end: 5 }),
            frameRate: 3,
            repeat: -1
        });
        // derecha
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('male', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'leftP2',
            frames: this.anims.generateFrameNumbers('zmale', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turnP2',
            // frames: [ {key: 'zmale', frame: 4}],
            frames: this.anims.generateFrameNumbers('zmale', { start: 3, end: 5 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'rightP2',
            frames: this.anims.generateFrameNumbers('zmale', { start: 6, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.overlap(player, stars, collectStar, null, this)

        function collectStar(player, estrella) {
            estrella.disableBody(true, true);

            if (stars.countActive(true) === 0) {
                stars.children.iterate(function (child) {
                    child.enableBody(true, child.x, 0, true, true);
                })
            }
        }
    }

    update() {
        var cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn', true);
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-380);
        }

        if (playerMulti == 2) {
            var keyObjUp = this.input.keyboard.addKey('W');
            var player2Up = keyObjUp.isDown;

            var keyObjRight = this.input.keyboard.addKey('D');
            var player2Right = keyObjRight.isDown;

            var keyObjLeft = this.input.keyboard.addKey('A');
            var player2Left = keyObjLeft.isDown;

            if (player2Left) {
                player2.setVelocityX(-160);
                player2.anims.play('leftP2', true);
            } else if (player2Right) {
                player2.setVelocityX(160);
                player2.anims.play('rightP2', true);
            } else {
                player2.setVelocityX(0);
                player2.anims.play('turnP2', true);
            }

            if (player2Up && player2.body.touching.down) {
                player2.setVelocityY(-380);
            }

        }

    }

}

class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

class Level extends Phaser.Scene {
    constructor() {
        super('levelScene');
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

class Mode extends Phaser.Scene {
    constructor() {
        super('modeScene');
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

class Controls extends Phaser.Scene {
    constructor() {
        super('controlsScene');
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}

class EndGame extends Phaser.Scene {
    constructor() {
        super('endScene');
    }

    preload() {

    }

    create() {

    }

    update() {

    }

}


// 3) Configuración base del videojuego
const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    // Array que indica el orden de visualización del vj
    scene: [MainScene, Menu, Level, Mode, Controls, EndGame],
    scale: {
        mode: Phaser.Scale.FIT
    }, physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 300,
            },
        },
    },
}
// 4) Inicialización de Phaser
new Phaser.Game(config);