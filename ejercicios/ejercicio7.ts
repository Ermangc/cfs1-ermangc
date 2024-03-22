// Leer valores hasta que se introduzca un cero (0)
// El usuario puede introducir valores positivos y negativos
// Encontrar el máximo de los elementos que se introdujeron
// Analizar cómo cambia el programa para hallar el mínimo

const realineSync = require("readline-sync");
let numerosUsuario : number = realineSync.questionInt("ingrese un numero: ");
let numeroMax : number = numerosUsuario;
let numeroMin : number = numerosUsuario;

while (numerosUsuario != 0){
    if (numerosUsuario > numeroMax){
        numeroMax = numerosUsuario;
    }else if(numerosUsuario < numeroMin){
        numeroMin = numerosUsuario
        }else{
        numerosUsuario  = realineSync.questionInt("ingrese un numero: ");
    }
}
console.log("El numero maximo ingresado es: ", numeroMax);
console.log("El numero minimo ingresado es: ", numeroMin);