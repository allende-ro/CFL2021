"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var RLS = require("readline-sync");
var casinoAllende = new casino_1.Casino;
console.log("Bienvenido a nuestro casino, elija una opcion para comenzar a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
var opcionUsuario = RLS.question();
while (opcionUsuario == "1" || opcionUsuario == "2" || opcionUsuario == "3" || opcionUsuario == "4") {
    switch (opcionUsuario) {
        case "1":
            casinoAllende.Ruleta.iniciarApuesta();
            console.log("elija una opcion para VOLVER a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
            opcionUsuario = RLS.question();
            break;
        case "2":
            var cantidadDados = RLS.questionInt("Ingrese la cantidad de dados con los que desea jugar: ");
            var apuestaUsuario = RLS.questionInt("Ingrese su apuesta: ");
            casinoAllende.JuegoDados.setCantidadDados(cantidadDados);
            casinoAllende.JuegoDados.setMontoApuesta(apuestaUsuario);
            casinoAllende.JuegoDados.jugar();
            console.log("Elija una opcion para VOLVER a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
            opcionUsuario = RLS.question();
            break;
        case "3":
            apuestaUsuario = RLS.questionInt("Ingrese su apuesta: ");
            casinoAllende.Tragamonedas.setapuesta(apuestaUsuario);
            casinoAllende.Tragamonedas.comenzar();
            console.log("elija una opcion para VOLVER a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
            opcionUsuario = RLS.question();
            break;
        case "4":
            apuestaUsuario = RLS.questionInt("Ingrese su apuesta: ");
            casinoAllende.TragamonedasPlus.setapuesta(apuestaUsuario);
            casinoAllende.TragamonedasPlus.comenzar();
            console.log("elija una opcion para VOLVER a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
            opcionUsuario = RLS.question();
            break;
    }
}
console.log("Muchas gracias por visitar nuestro casino, esperamos que vuelva pronto");
