//ejercicio: Calculo de Descuento.

// codigo para obtener los datos que ingresa el usuario
//const realineSync = require("readline-sync");

let precioProducto : number = realineSync.questionInt("ingrese precio: ");
// calculo del descuento

if(precioProducto > 1000) {
    let precioFinal : number = precioProducto - (precioProducto * 0.1);
    console.log("Su precio es de $",precioFinal);
} else {
    console.log("Su precio es de $",precioProducto);
}



