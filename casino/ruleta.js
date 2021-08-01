"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var RLS = require("readline-sync");
var fs = require("fs");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.montoApostado = 0;
        this.resultado = 0;
        this.montoMinimo = 1000;
        this.apuesta = 0;
    }
    Ruleta.prototype.iniciarApuesta = function () {
        this.apuesta = RLS.questionInt("Por favor, ingrese un numero del 0 al 32 para comenzar a jugar: ");
        this.montoApostado = RLS.questionInt("Ingrese el monto que desea apostar,el minimo es de $1000 : ");
        if (this.montoApostado < this.montoMinimo) {
            console.log("Lo siento, el monto ingresado no es valido");
        }
        else {
            this.girarRuleta();
        }
    };
    Ruleta.prototype.girarRuleta = function () {
        var randomNumberGenerator = require('random-number-v1');
        var numeroRandom = randomNumberGenerator(0, 32);
        console.log("Salio el numero ", numeroRandom);
        if (this.apuesta == numeroRandom) {
            this.resultado = this.getPremio();
            var result = 'Numero que salio en la ruleta :' + String(numeroRandom) + '\n' + 'Numero apostado ' + String(this.apuesta) + '\n' + 'Resultado: ' + String(this.resultado) + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoRuleta.txt', result, function (err) {
                if (err)
                    throw err;
            });
            console.log("Felicitaciones, usted a ganado " + this.resultado);
        }
        else {
            var result = 'Numero que salio en la ruleta :' + String(numeroRandom) + '\n' + 'Numero apostado ' + String(this.apuesta) + '\n' + 'Resultado: Gano el casino' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoRuleta.txt', result, function (err) {
                if (err)
                    throw err;
            });
            console.log("Usted perdio, suerte para la proxima");
        }
    };
    Ruleta.prototype.getPremio = function () {
        this.resultado = (Number(this.apuesta) * 36);
        return this.resultado;
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
