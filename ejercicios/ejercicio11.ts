// Almacene en un arreglo de dimension N numero (los ingresa el usuario)
// muestre cuanto son positivos, cuantos negativos y cuantos 0 hay

import * as readlinesync from "readline-sync";
// tomo del usuario el tamano del arreglo
let tamanoArreglo:number = readlinesync.questionInt("Ingrese la cantidad de numero a ingresar: ");

let arregloNumeros : number[] = new Array (tamanoArreglo);
let numerosPositivos : number = 0;
let numerosNegativos : number = 0;
let numerosCeros : number = 0;

// mientras hace el recorrido cuenta si es positivo, negativo o ceros y los almacena.
for(let indice:number = 0;indice < arregloNumeros.length; indice++){
    arregloNumeros[indice] = readlinesync.questionInt("Ingrese un numero: ");
    if(arregloNumeros[indice]==0){
        numerosCeros++;
    }else if (arregloNumeros[indice]>0){
        numerosPositivos++;
    }else{
        numerosNegativos++;
    }
}
console.log(`En el arreglo hay ${numerosPositivos} positivos, ${numerosNegativos} negativos y ${numerosCeros} ceros`);