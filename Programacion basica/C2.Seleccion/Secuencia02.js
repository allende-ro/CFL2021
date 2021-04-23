let readlineSync=require("readline-sync");
let primerNumero= readlineSync.questionInt("ingrese el primer numero");
console.log("el primer numero es", primerNumero);
let segundoNumero= readlineSync.questionInt("ingrese el segundo numero");
console.log ("el segundo numero es", segundoNumero);
let resultado =primerNumero + segundoNumero;
console.log("el resultado de la suma es", resultado);