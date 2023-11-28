// Arreglo o "Arrays" [Van en corchetes cuadrados]

// const colores = ["rojo", "amarillo", "verde", "azul", "negro", "dos", 3, true]
// console.log(colores)

const colores = ["rojo", "amarillo", "verde", "azul", "negro", "blanco"]
console.log(colores)
console.table(colores)


// Impresión de contenido
// Acceder a un valor específico

console.log(colores)
console.log(colores[0])

// "lenght" Ver longoitud de un arreglo
console.log(colores.length)

// "toString" sirve para convertir un valor a cadena de texto (string) y lo separa por comas y sin espacios
console.log(colores.toString())

// Operaciones con Arrays
// Añadir elementos
// colores.push("rosa") // Se agrega al final del Array
// colores.unshift("rosa") // Se agrega al inicio del Array

// const nuevosColores = [...colores, "rosa"]
const nuevosColores = ["rosa", ...colores]

// Eliminar elemetnos
// colores.pop() // Elimina el ultimo elemento del arreglo
// colores.shift() // Elimina el primer elemento del arreglo
// colores.splice(2, 1) // Elimina posiciones especificas

// Filter te permite filtrar, ademas, itera sobre cada elemento para identificarlos 
const nuevoArray = colores.filter(function (color) {
    // console.log(color)
    // return color === "verde"
    return color !== "verde"

});

console.log(nuevoArray)


// Reemplazar elementos
// colores[0] = "rojitos"

const nuevoArrayDos = colores.map(function (id) {
    // console.log(id)
    if (id === "verde") {
        return "verdes"
    } else {
        return id
    }

});


console.log(nuevoArrayDos)
console.log(colores)
console.log(nuevosColores)


