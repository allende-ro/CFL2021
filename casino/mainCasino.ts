import { Casino } from './casino';
import { Tragamonedas } from './tragamonedas';
import { TragamonedaPlus } from './tragaMonedasPlus';
import { Dados } from './dados';
import { Ruleta } from './ruleta';
import * as RLS from "readline-sync";

let casinoAllende: Casino = new Casino;

console.log("Bienvenido a nuestro casino, elija una opcion para comenzar a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
let opcionUsuario: String = RLS.question();

while (opcionUsuario == "1" || opcionUsuario == "2" || opcionUsuario == "3" || opcionUsuario == "4") {
    switch (opcionUsuario) {
        case "1":
            casinoAllende.Ruleta.iniciarApuesta();
            console.log("elija una opcion para VOLVER a jugar: 1- Ruleta, 2-Dados, 3-TragaMonedas, 4- TragaMonedasPlus, o cualquier otra tecla para salir.");
            opcionUsuario = RLS.question();
            break;
        case "2":
            let cantidadDados: Number = RLS.questionInt("Ingrese la cantidad de dados con los que desea jugar: ");
            let apuestaUsuario: Number = RLS.questionInt("Ingrese su apuesta: ");
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
