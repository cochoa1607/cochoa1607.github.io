// Herencia

class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad;
    }
}

// Clase Hija

/*
class Empleado extends Persona {
    constructor(area) {
        this._area = area;
    }

    get area() {
        return this._area;
    }

    set area(area) {
        this._area;
    }
}
*/

class Empleado extends Persona {
    constructor(nombre, apellido, edad, area) {
        super(nombre, apellido, edad) // Llamar al constructor de la clase padre (Persona)
        this._area = area;
    }

    get area() {
        return this._area;
    }

    set area(area) {
        this._area;
    }
}

let personaUno = new Persona('Daniel', 'Ochoa');
console.log(personaUno);

let empleadoUno = new Empleado('Rodolfo', 'Rocha', 30, 'animación');
console.log(empleadoUno);