// Objetos https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures
// un objeto es un valor en la memoria al que posiblemente hace referencia un identificador.
// Un Identificador es una secuencia de caracteres en el código que identifica una Variable, función o propiedad.

// lo que esta entre las llaves pertenece al objeto

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}


console.log(producto)
console.table(producto)

// El punto me da acceso a la propiedades
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring (sacar de una estructura, es decir extraer valores desde un objeto)
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)


// Object Literal Enhacement (Mejora literal de objeto =>
// meter a una estructura, es decir introducir valores dentro de un objeto)
const autenticado = true
const usuario = "Juan"

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }

// forma simplificada
const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)

// Objetos - Manipulación
const producto2 = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar
// Object.seal(producto) - Modificar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
producto2.nombre = "Monitor Curvo"
console.log(producto2)

// Si no existe, lo va a añadir
producto2.imagen = "imagen.jpg"
console.log(producto2)

delete producto2.disponible
console.table(producto2)
console.log(producto2)