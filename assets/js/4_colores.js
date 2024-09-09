// 3.1 y 3.2
// Función cambio de color a negro
function cambiarColorANegro(event) {
  event.target.style.backgroundColor = "black";
}

// Seleccion de divs
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

// Eventos cambio color a negro en Divs
div1.addEventListener("click", cambiarColorANegro);
div2.addEventListener("click", cambiarColorANegro);
div3.addEventListener("click", cambiarColorANegro);
div4.addEventListener("click", cambiarColorANegro);

//3.3
// Variable global para guardar el color del div principal
let colorGlobal = "white";

// Función para cambio de color al oprimir tecla
function cambiarColorPorTecla(event) {
  const div = document.getElementById("key");

  // Cambiar color div con teclas 'a', 's', 'd'
  if (event.key === "a") {
    colorGlobal = "pink";
  } else if (event.key === "s") {
    colorGlobal = "orange";
  } else if (event.key === "d") {
    colorGlobal = "lightblue";
  }

  // Cambiar color
  div.style.backgroundColor = colorGlobal;

  // Crear divs con teclas
  if (event.key === "q" || event.key === "w" || event.key === "e") {
    crearNuevoDiv(event.key);
  }
}

// Función para crear un nuevo div con color específico
function crearNuevoDiv(tecla) {
  const container = document.getElementById("container");
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.border = "1px solid black";

  // Colores de nuevos Divs
  if (tecla === "q") {
    nuevoDiv.style.backgroundColor = "purple";
  } else if (tecla === "w") {
    nuevoDiv.style.backgroundColor = "gray";
  } else if (tecla === "e") {
    nuevoDiv.style.backgroundColor = "brown";
  }

  // Agregar Div a contenedor
  container.appendChild(nuevoDiv);
}

// Evento al presionar tecla
document.addEventListener("keydown", cambiarColorPorTecla);
