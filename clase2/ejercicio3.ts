// Ejercicio: Autos de Carreras


// codigo para obtener los datos que ingresa el usuario
const inputUsuario = require("readline-sync");

let vuelta1 : number = inputUsuario.question("Ingrese el tiempo de vuleta 1: ");
let vuelta2 : number = inputUsuario.question("Ingrese el tiempo de vuleta 2: ");
let vuelta3 : number = inputUsuario.question("Ingrese el tiempo de vuleta 3: ");
let vuelta4 : number = inputUsuario.question("Ingrese el tiempo de vuleta 4: ");

let tiempoTotal : number = Number(vuelta1) + Number(vuelta2) + Number(vuelta3) + Number(vuelta4);
console.log("el tiempo total es de: ",tiempoTotal);

let promedioVuelta = tiempoTotal/4;
console.log("El tiempo promedio es de: ",promedioVuelta);