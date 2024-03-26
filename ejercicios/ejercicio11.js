"use strict";
// Almacene en un arreglo de dimension N numero (los ingresa el usuario)
// muestre cuanto son positivos, cuantos negativos y cuantos 0 hay
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
// tomo del usuario el tamano del arreglo
var tamanoArreglo = readlinesync.questionInt("Ingrese la cantidad de numero a ingresar: ");
var arregloNumeros = new Array(tamanoArreglo);
var numerosPositivos = 0;
var numerosNegativos = 0;
var numerosCeros = 0;
// mientras hace el recorrido cuenta si es positivo, negativo o ceros y los almacena.
for (var indice = 0; indice < arregloNumeros.length; indice++) {
    arregloNumeros[indice] = readlinesync.questionInt("Ingrese un numero: ");
    if (arregloNumeros[indice] == 0) {
        numerosCeros++;
    }
    else if (arregloNumeros[indice] > 0) {
        numerosPositivos++;
    }
    else {
        numerosNegativos++;
    }
}
console.log("En el arreglo hay ".concat(numerosPositivos, " positivos, ").concat(numerosNegativos, " negativos y ").concat(numerosCeros, " ceros"));
