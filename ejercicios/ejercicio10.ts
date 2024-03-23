// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
// verdadero o falso según
// si el primer número que se indique como parámetro es múltiplo del segundo 

import * as readlinesync from "readline-sync";

let numero1Ingresado = readlinesync.questionInt("Ingrese el primer numero: ");
let numero2Ingresado = readlinesync.questionInt("Ingrese el primer segundo: ");

function esMultiplo(numero1 : number , numero2 : number) {

    numero1 = numero1Ingresado;
    numero2 = numero2Ingresado;
    if (numero1 % numero2 == 0){
        console.log(`el numero ${numero2} es multiplo de ${numero1}`);
    }else {
        console.log(`Los numeros no son multiplos entre si`);
    }
}
esMultiplo(numero1Ingresado, numero2Ingresado);
