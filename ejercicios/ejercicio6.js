// Ejercicio – Descuento Octubre
// obtener el numero por medio del usuario
var realineSync = require("readline-sync");
var precioProducto = realineSync.questionInt("ingrese el precio del producto: $");
var cantidadProducto = realineSync.questionInt("ingrese la cantidad del producto: ");
var mesCompra = realineSync.question("ingrese mes de compra: ");
var mesMayuscula = mesCompra.toUpperCase();
var precioFinal = (precioProducto * cantidadProducto);
if (mesMayuscula == "OCTUBRE") {
    var precioDescuento = precioFinal - (precioFinal * 0.15);
    console.log("Su precio con descuento es de $", precioDescuento);
}
else {
    console.log("Su precio es de $", precioFinal);
}
