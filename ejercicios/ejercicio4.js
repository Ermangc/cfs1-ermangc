// Desarrolle un algoritmo que dados tres números determine 
// cuál es el mayor de los tres.
var readlineSync = require("readline-sync");
// obtener los numeros por medio del usuario
var numero1 = readlineSync.questionInt("Ingrese el primer numero: ");
var numero2 = readlineSync.questionInt("Ingrese el segundo numero: ");
var numero3 = readlineSync.questionInt("Ingrese el tercer numero: ");
// calculo del mayor
if ((numero1 > numero2) && (numero1 > numero3)) {
    console.log("El numero mayor es:", numero1);
}
else if ((numero2 > numero1) && (numero2 > numero3)) {
    console.log("El numero mayor es:", numero2);
}
else {
    console.log("El numero mayor es:", numero3);
}
