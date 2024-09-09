//PINTAR.HTML
const ele = document.getElementById("ele1");

//color de fondo
ele.style.backgroundColor = "green";
ele.style.color = "white";

// Evento de click
ele.addEventListener("click", function () {
  // Cambio de color
  ele.style.backgroundColor = "yellow";
  ele.style.color = "black";
});
