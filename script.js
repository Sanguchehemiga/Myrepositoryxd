// Obtener el elemento con el id "boton"
var boton = document.getElementById("boton");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  // Cambiar el color de fondo del encabezado al hacer clic en el botón
  var header = document.querySelector("header");
  header.style.backgroundColor = getRandomColor();
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}