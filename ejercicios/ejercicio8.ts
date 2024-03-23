// Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
// Tenga en cuenta que la clave es la palabra “eureka”
// Solo tenemos 3 intentos para acertar.

import * as readlinesync from 'readline-sync';

// usuario ingresa la clave y se transforma en mayuscula automaticamente
let claveIngresada = readlinesync.question("Ingrese la clave: ").toUpperCase();
let intentos : number = 3;
let clave : string = "EUREKA";

while (clave != claveIngresada && intentos > 0){
    intentos--;
    if(intentos > 0){
        claveIngresada = readlinesync.question(`Le quedan ${intentos} intentos, Ingrese nuevamente la clave: `).toUpperCase();
    }else{
        console.log("Se le acabaron los intentos");
    }     
}
if(clave == claveIngresada){
    console.log("Clave correcta")
}