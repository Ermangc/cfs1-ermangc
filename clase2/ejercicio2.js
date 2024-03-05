//ejercicio: Calculo de Descuento.
// codigo para obtener los datos que ingresa el usuario
var realineSync = require("readline-sync");
var precioProducto = realineSync.questionInt("ingrese precio: ");
// calculo del descuento
if (precioProducto > 1000) {
    var precioFinal = precioProducto - (precioProducto * 0.1);
    console.log("Su precio es de $", precioFinal);
}
else {
    console.log("Su precio es de $", precioProducto);
}
