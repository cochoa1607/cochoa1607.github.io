const categoriaSelect = document.getElementById("categoria");
const elementoSelect = document.getElementById("elemento");

const opciones = {
  fisica: [
    { texto: "Persona física", valor: "fisica" },
    { texto: "Persona moral", valor: "moral" },
  ],
  moral: [
    { texto: "Zanahoria", valor: "zanahoria" },
    { texto: "Brócoli", valor: "brocoli" },
    { texto: "Espinaca", valor: "espinaca" },
  ],
};

function actualizarElementos() {
  const categoria = categoriaSelect.value;
  const elementos = opciones[categoria];

  elementoSelect.innerHTML = "";

  for (const elemento of elementos) {
    const opcion = document.createElement("option");
    opcion.text = elemento.texto;
    opcion.value = elemento.valor;
    elementoSelect.add(opcion);
  }
}

categoriaSelect.addEventListener("change", actualizarElementos);

// Llamar a la función al cargar la página para establecer las opciones iniciales
actualizarElementos();