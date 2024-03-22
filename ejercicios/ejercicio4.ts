// Desarrolle un algoritmo que dados tres números determine 
// cuál es el mayor de los tres.

const readlineSync = require("readline-sync");

// obtener los numeros por medio del usuario
let numero1 : number = readlineSync.questionInt("Ingrese el primer numero: ");
let numero2 : number = readlineSync.questionInt("Ingrese el segundo numero: ");
let numero3 : number = readlineSync.questionInt("Ingrese el tercer numero: ");

// calculo del mayor
if((numero1 > numero2) && (numero1 > numero3)){
    console.log("El numero mayor es:", numero1);
}else if ((numero2 > numero1) && (numero2 > numero3)) {
    console.log("El numero mayor es:", numero2);
}else {
    console.log("El numero mayor es:", numero3);
}
