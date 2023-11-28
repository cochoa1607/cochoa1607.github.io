
function suma() {
    let numero01, numero02, resultado;


    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 + numero02;

    alert("El resultado es: " + resultado);
}

function resta() {
    let numero01, numero02, resultado;

    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 - numero02;

    alert("El resultado es: " + resultado);
}

function multiplicacion() {
    let numero01, numero02, resultado;

    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 * numero02;

    alert("El resultado es: " + resultado);
}

function division() {
    let numero01, numero02, resultado;

    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 / numero02;

    alert("El resultado es: " + resultado);
}

function promedio() {
    let numero01, numero02, resultado, promedio;

    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 + numero02;
    promedio = resultado / 2;

    alert("El resultado es: " + resultado);
}

function arrayUno() {
    let a, b, c, d, e;

    a = Number(prompt("Ingresar el primer número:"));
    b = Number(prompt("Ingresar el segundo número:"));
    c = Number(prompt("Ingresar el tercer número:"));
    d = Number(prompt("Ingresar el cuarto número:"));
    e = Number(prompt("Ingresar el quinto número:"));

    alert("Los Arrays son: " + (a) + ", " + (b) + ", " + (c) + ", " + (d) + ", " + (e));
}

function arrayDos() {
    let a, b, c, d, e;

    a = Number(prompt("Ingresar el primer número:"));
    b = Number(prompt("Ingresar el segundo número:"));
    c = Number(prompt("Ingresar el tercer número:"));
    d = Number(prompt("Ingresar el cuarto número:"));
    e = Number(prompt("Ingresar el quinto número:"));

    alert("Los Arrays son: " + (a ** 2) + ", " + (b ** 2) + ", " + (c ** 2) + ", " + (d ** 2) + ", " + (e ** 2));
}

function arrayTres() {
    let platilloUno, platilloIngredientes;

    platilloUno = Number(prompt("Ingresar el nombre del platillo:"));
    platilloIngredientes = Number(prompt("Ingresar el número de ingredientes del platillo:"));

    nombreIngrediente = Number

    c = Number(prompt("Ingresar el tercer número:"));
    d = Number(prompt("Ingresar el cuarto número:"));
    e = Number(prompt("Ingresar el quinto número:"));

    alert("Los Arrays son: " + (a ** 2) + ", " + (b ** 2) + ", " + (c ** 2) + ", " + (d ** 2) + ", " + (e ** 2));
}

function platillos() {

    let gasto, j, p, plato;

    plato = Number(prompt("Ingresar el nombre del platillo:"));

    p = Number(prompt("Ingresar la cantidad de ingredientes del platillo:"));


    let productos = Number(p);
    let precios = Number(p);

    gasto = 0;
    for (j = 1; j <= p; j++) {

        productos[j - 1] = Number(prompt("Ingresar el nombre del ingrediente #", j));

        precios[j - 1] = Number(prompt("Ingresar el precio del ingrediente #", j));

        gasto = gasto + precios[j - 1];
    }

    alert("El precio del platillo es: $", gasto);
}
