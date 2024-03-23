"use strict";
// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
// verdadero o falso según
// si el primer número que se indique como parámetro es múltiplo del segundo 
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var numero1Ingresado = readlinesync.questionInt("Ingrese el primer numero: ");
var numero2Ingresado = readlinesync.questionInt("Ingrese el primer segundo: ");
function esMultiplo(numero1, numero2) {
    numero1 = numero1Ingresado;
    numero2 = numero2Ingresado;
    if (numero1 % numero2 == 0) {
        console.log("el numero ".concat(numero2, " es multiplo de ").concat(numero1));
    }
    else {
        console.log("Los numeros no son multiplos entre si");
    }
}
esMultiplo(numero1Ingresado, numero2Ingresado);
