"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var tragamonedas_1 = require("./tragamonedas");
var tragaMonedasPlus_1 = require("./tragaMonedasPlus");
var dados_1 = require("./dados");
var ruleta_1 = require("./ruleta");
var Casino = /** @class */ (function () {
    function Casino() {
        this.Tragamonedas = new tragamonedas_1.Tragamonedas();
        this.TragamonedasPlus = new tragaMonedasPlus_1.TragamonedaPlus();
        this.Ruleta = new ruleta_1.Ruleta();
        this.JuegoDados = new dados_1.Dados();
    }
    return Casino;
}());
exports.Casino = Casino;
