// Ejercicio: Autos de Carreras
// codigo para obtener los datos que ingresa el usuario
var inputUsuario = require("readline-sync");
var vuelta1 = inputUsuario.question("Ingrese el tiempo de vuleta 1: ");
var vuelta2 = inputUsuario.question("Ingrese el tiempo de vuleta 2: ");
var vuelta3 = inputUsuario.question("Ingrese el tiempo de vuleta 3: ");
var vuelta4 = inputUsuario.question("Ingrese el tiempo de vuleta 4: ");
var tiempoTotal = Number(vuelta1) + Number(vuelta2) + Number(vuelta3) + Number(vuelta4);
console.log("el tiempo total es de: ", tiempoTotal);
var promedioVuelta = tiempoTotal / 4;
console.log("El tiempo promedio es de: ", promedioVuelta);
