class Personaje {
    constructor(nombre, planeta, edad) {
        this._nombre = nombre;
        this._planeta = planeta;
        this._edad = edad;

    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre;
    }

    get planeta() {
        return this._planeta;
    }

    set planeta(planeta) {
        this._planeta;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad;
    }
}

class Superpoderes extends Personaje {
    constructor(nombre, planeta, edad, volar, superFuerza, rayoLaser, poderEspecial) {
        super(nombre, planeta, edad) // Llamar al constructor de la clase padre (Persona)
        this._volar = volar;
        this._superFuerza = superFuerza;
        this._rayoLaser = rayoLaser;
        this._poderEspecial = poderEspecial;
    }

    get volar() {
        return this._volar;
    }

    set volar(volar) {
        this._volar = volar;
    }

    get superFuerza() {
        return this._superFuerza;
    }

    set superFuerza(superFuerza) {
        this._superFuerza = superFuerza;
    }

    get rayoLaser() {
        return this._rayoLaser;
    }

    set rayoLaser(rayoLaser) {
        this._rayoLaser = rayoLaser;
    }

    get poderEspecial() {
        return this._poderEspecial;
    }

    set poderEspecial(poderEspecial) {
        this._poderEspecial = poderEspecial;
    }
}

let simeone = new Personaje('Super Chango', 'Terra', '365 años');
console.log(simeone);

let poderesSimeone = new Superpoderes('Super Chango', 'Terra', '365 años', false, 'Nivel 7', false, 'Aplastar');
console.log(poderesSimeone);

let yaiju = new Personaje('Yaiju', 'Temar', '1250 años');
console.log(yaiju);

let poderesYaiju = new Superpoderes('Yaiju', 'Temar', '1250 años', true, 'Nivel 6', true, 'Absorción de colágeno');
console.log(poderesYaiju);

let dratigo = new Personaje('Dratigo', 'Temar', '1250 años');
console.log(dratigo);

let poderesDratigo = new Superpoderes('Dratigo', 'Váminus', '683 años', true, 'Nivel 9', false, 'Lanza llamas');
console.log(poderesDratigo);


console.log(poderesSimeone.poderEspecial);
console.log(poderesYaiju.poderEspecial);
console.log(poderesDratigo.poderEspecial);