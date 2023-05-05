const tipoSelect = document.getElementById("tipo");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputEmpresa = document.getElementById("input-empresa");
const inputDenominacion = document.getElementById("input-denominacion");

function mostrarCampo() {
  const tipo = tipoSelect.value;

  inputNombre.style.display = "none";
  inputApellido.style.display = "none";
  inputEmpresa.style.display = "none";
  inputDenominacion.style.display = "none";

  switch (tipo) {
    case "fisica":
      inputNombre.style.display = "block";
      inputApellido.style.display = "block";
      break;
    case "moral":
      inputEmpresa.style.display = "block";
      inputDenominacion.style.display = "block";
      break;
  }
}

tipoSelect.addEventListener("change", mostrarCampo);

// Llamar a la función al cargar la página para establecer el estado inicial
mostrarCampo();
