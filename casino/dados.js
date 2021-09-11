"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var fs = require("fs");
var Dados = /** @class */ (function () {
    function Dados() {
    }
    Dados.prototype.setCantidadDados = function (cantidadDados) {
        this.cantDados = cantidadDados;
    };
    Dados.prototype.setMontoApuesta = function (apuesta) {
        this.montoApostado = apuesta;
    };
    Dados.prototype.jugar = function () {
        var dado = require('random-number-v1');
        this.resultadoCasino = 0;
        this.resultadoPersona = 0;
        for (var i = 1; i <= this.cantDados; i++) {
            var dadoC = dado(1, 6);
            console.log(" Dado " + i + " del casino = " + dadoC);
            this.resultadoCasino = this.resultadoCasino + dadoC;
        }
        for (var indice = 1; indice <= this.cantDados; indice++) {
            var dadoU = dado(1, 6);
            console.log(" Dado " + indice + " del usuario = " + dadoU);
            this.resultadoPersona = this.resultadoPersona + dadoU;
        }
        console.log("Resultado Casino " + this.resultadoCasino);
        console.log("Resultado Persona " + this.resultadoPersona);
        if (this.resultadoCasino > this.resultadoPersona) {
            console.log("Casino Gana la partida");
            var result = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino ' + String(this.resultadoCasino) + '\n' + 'Resultado: Gano el casino' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoDados.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if (this.resultadoPersona > this.resultadoCasino) {
            console.log("El usuario gana la partida; el monto que usted gano es " + this.getpremio());
            var result = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino: ' + String(this.resultadoCasino) + '\n' + 'Resultado: Gano el jugador' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoDados.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if (this.resultadoCasino == this.resultadoPersona) {
            console.log("No hay ganador, el usuario recupera el monto apostado");
            var result = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino: ' + String(this.resultadoCasino) + '\n' + 'Resultado: Empate' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoDados.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
    };
    Dados.prototype.getpremio = function () {
        var premio = Number(this.montoApostado) * Number(this.cantDados);
        return premio;
    };
    return Dados;
}());
exports.Dados = Dados;
//let juegoDados = new Dados( 2, 100 );
//juegoDados.jugar();
