//ejercicio: Calculo de Descuento.
// codigo para obtener los datos que ingresa el usuario
var realineSync = require("readline-sync");
var precioProducto = realineSync.question("ingrese precio: ");
// calculo del descuento
var precioFinal = precioProducto - (precioProducto) * 0.1;
console.log("Su precio es de $", precioFinal);
