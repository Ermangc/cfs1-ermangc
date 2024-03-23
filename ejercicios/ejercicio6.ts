// Ejercicio – Descuento Octubre

// obtener el numero por medio del usuario
const realineSync = require("readline-sync");

let precioProducto1 : number = realineSync.questionInt("ingrese el precio del producto: $");
let cantidadProducto : number = realineSync.questionInt("ingrese la cantidad del producto: ");
let mesCompra : string = realineSync.question("ingrese mes de compra: ");

// convierto las letras de los meses en mayuscula para hacer solo una verificacion y evitar errores
let mesMayuscula : string = mesCompra.toUpperCase();

let precioFinal : number = (precioProducto1 * cantidadProducto)


if(mesMayuscula == "OCTUBRE"){
    let precioDescuento : number = precioFinal - (precioFinal* 0.15);
    console.log("Su precio con descuento es de $", precioDescuento);
}else{
    console.log("Su precio es de $", precioFinal);
}