var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);


var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}



var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclados", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

var articulosNombre = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// articulos.forEach(function(articulo){
//     console.log(articulo.nombre)
// });

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});