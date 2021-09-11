"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var fs = require("fs");
var Tragamonedas = /** @class */ (function () {
    //costructor de objetos
    function Tragamonedas() {
        this.premio = 0;
        this.montoMin = 1000;
        this.cantCarretes = 3;
        this.apuesta = 0;
        this.figuras = ["NumeroSiete", "Manzanas", "Peras", "Bananas", "CartaPoker", "Moneda", "Diamante", "Uvas", "Anillo", "Kiwi"];
    }
    //
    Tragamonedas.prototype.comenzar = function () {
        if (this.apuesta < this.montoMin) {
            console.log("El monto ingresado es invalido para comenzar a jugar");
        }
        else {
            console.log("Perfecto, a jugar");
            this.girar();
        }
    };
    Tragamonedas.prototype.girar = function () {
        var carrete1 = Math.floor(Math.random() * this.figuras.length);
        var carrete2 = Math.floor(Math.random() * this.figuras.length);
        var carrete3 = Math.floor(Math.random() * this.figuras.length);
        console.log("Carrete 1: ", this.figuras[carrete1]);
        console.log("Carrete 2: ", this.figuras[carrete2]);
        console.log("Carrete 3: ", this.figuras[carrete3]);
        if (carrete1 == carrete2 && carrete2 == carrete3) {
            console.log("Felicitaciones, usted triplico el valor de su apuesta, su dinero disponible es: " + this.getpremio());
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete3]) + ' ' + 'Todas las figuras son iguales. Gano Jugador' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if (carrete1 == carrete2 || carrete2 == carrete3 || carrete1 == carrete3) {
            console.log("¡¡Bien hecho!!Usted recupero el dinero de su apuesta", this.apuesta);
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete3]) + ' ' + 'Dos figuras son iguales. Jugador salvo su dinero apostado' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            console.log("Perdio, Vuelva a intentarlo");
            var result = 'Figuras que salieron en la maquina :' + '\n' + (this.figuras[carrete1]) + '\n' + (this.figuras[carrete2]) + '\n' + (this.figuras[carrete3]) + '\n' + 'Ninguna de las figuras son iguales. Jugador perdio' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
    };
    Tragamonedas.prototype.setapuesta = function (apuestaJugador) {
        this.apuesta = apuestaJugador;
    };
    Tragamonedas.prototype.getpremio = function () {
        var premio = (Number(this.apuesta) * 2);
        return premio;
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
//cierre de clase
