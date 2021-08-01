"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedaPlus = void 0;
var tragamonedas_1 = require("./tragamonedas");
var fs = require("fs");
var TragamonedaPlus = /** @class */ (function (_super) {
    __extends(TragamonedaPlus, _super);
    function TragamonedaPlus() {
        var _this = _super.call(this) || this;
        _this.montoMin = 5000;
        _this.cantCarretes = 5;
        return _this;
    }
    TragamonedaPlus.prototype.girar = function () {
        var carrete1 = Math.floor(Math.random() * this.figuras.length);
        var carrete2 = Math.floor(Math.random() * this.figuras.length);
        var carrete3 = Math.floor(Math.random() * this.figuras.length);
        var carrete4 = Math.floor(Math.random() * this.figuras.length);
        var carrete5 = Math.floor(Math.random() * this.figuras.length);
        console.log("Carrete 1: ", this.figuras[carrete1]);
        console.log("Carrete 2: ", this.figuras[carrete2]);
        console.log("Carrete 3: ", this.figuras[carrete3]);
        console.log("Carrete 4: ", this.figuras[carrete4]);
        console.log("Carrete 5: ", this.figuras[carrete5]);
        if ((carrete1 == carrete2) && (carrete2 == carrete3) && (carrete3 == carrete4) && (carrete4 == carrete5)) {
            console.log("Felicitaciones, usted quintuplico el valor de su apuesta, su dinero disponible es: " + this.getpremio());
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete3]) + (this.figuras[carrete4]) + ' ' + (this.figuras[carrete5]) + ' ' + 'Todas las figuras son iguales. Gano Jugador' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if ((carrete1 == carrete2) && (carrete2 == carrete3)) {
            console.log("¡¡Bien hecho!!Usted recupero el dinero de su apuesta", this.apuesta);
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete4]) + '' + (this.figuras[carrete5]) + ' ' + 'Salieron tres figuras iguales consecutivas. El jugador recupera su apuesta' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if ((carrete2 == carrete3) && (carrete3 == carrete4)) {
            console.log("¡¡Bien hecho!! Usted recupero el dinero de su apuesta", this.apuesta);
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete4]) + '' + (this.figuras[carrete5]) + ' ' + 'Salieron tres figuras iguales consecutivas. El jugador recupera su apuesta' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else if ((carrete3 == carrete4 && carrete4 == carrete5)) {
            console.log("¡¡Bien hecho!! Usted recupero el dinero de su apuesta", this.apuesta);
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete4]) + '' + (this.figuras[carrete5]) + ' ' + 'Salierom tres figuras iguales consecutivas. El jugador recupera su apuesta' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            console.log("Perdio, Vuelva a intentarlo");
            var result = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' + (this.figuras[carrete2]) + ' ' + (this.figuras[carrete4]) + '' + (this.figuras[carrete5]) + ' ' + 'Ninguna figura es igual. El jugador pierde su dinero.' + '\n' + '---------------------' + '\n';
            fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
                if (err)
                    throw err;
            });
        }
    };
    TragamonedaPlus.prototype.getpremio = function () {
        var premio = (Number(this.apuesta) * 5);
        return premio;
    };
    return TragamonedaPlus;
}(tragamonedas_1.Tragamonedas));
exports.TragamonedaPlus = TragamonedaPlus;
