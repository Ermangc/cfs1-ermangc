// Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar
// y le informe al usuario... En el caso de ser 0 (cero) el algoritmo deberá  informarlo.

// obtener el numero por medio del usuario
const realineSync = require("readline-sync");

let numeroIngresado : number = realineSync.questionInt("ingrese un numero para saber si es par o impar: ");

if (numeroIngresado == 0){
    console.log("No puede ingresar el numero 0, intente con otro numero");
}else if(numeroIngresado % 2 == 0){
    console.log("El numero ingresado es par.");
}else{
    console.log("El numero ingresado es impar");
}