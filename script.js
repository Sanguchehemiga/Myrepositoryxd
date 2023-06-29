// Obtener el elemento con el id "boton"
var boton = document.getElementById("boton");

// Obtener el elemento con el id "header"
var header = document.querySelector("header");

// Variable para controlar el estado del efecto de arco iris
var rainbowActive = true;

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  // Cambiar el estado del efecto de arco iris
  rainbowActive = !rainbowActive;
  
  // Detener o reanudar la animación de arco iris
  if (rainbowActive) {
    header.style.animationPlayState = "running";
  } else {
    header.style.animationPlayState = "paused";
    header.style.backgroundColor = getRandomColor();
  }
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