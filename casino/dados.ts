import { Console } from "console";
import * as fs from 'fs'

export class Dados {

    private montoApostado: number;
    private cantDados: number;
    private resultadoCasino: number;
    private resultadoPersona: number;


    public constructor() {
    }

    public setCantidadDados(cantidadDados: number):void{
        this.cantDados = cantidadDados;
    }

    public setMontoApuesta(apuesta: number):void{
        this.montoApostado = apuesta;
    }

    public jugar(): void {

        let dado = require('random-number-v1');
        this.resultadoCasino = 0;
        this.resultadoPersona = 0;

        for (let i = 1; i <= this.cantDados; i++){
            let dadoC = dado(1, 6);
            console.log(" Dado " + i + " del casino = " + dadoC);
            this.resultadoCasino = this.resultadoCasino + dadoC;
        }

        for (let indice = 1; indice <= this.cantDados; indice++) {
            let dadoU = dado(1, 6);
            console.log(" Dado " + indice + " del usuario = " + dadoU);
            this.resultadoPersona = this.resultadoPersona + dadoU;
        }

        console.log("Resultado Casino " + this.resultadoCasino);
        console.log("Resultado Persona " + this.resultadoPersona);

        if (this.resultadoCasino > this.resultadoPersona) {
            console.log("Casino Gana la partida");
        let result: string = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino ' + String(this.resultadoCasino) + '\n' + 'Resultado: Gano el casino' + '\n' +'---------------------'+ '\n';
         fs.appendFile('resultadoDados.txt', result, function (err) {
        if (err) throw err;
        });
        } else if (this.resultadoPersona > this.resultadoCasino) {
            console.log("El usuario gana la partida; el monto que usted gano es " + this.getpremio());
         let result: string = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino: ' + String(this.resultadoCasino) + '\n' + 'Resultado: Gano el jugador' + '\n' +'---------------------'+ '\n';
         fs.appendFile('resultadoDados.txt', result, function (err) {
           if (err) throw err;
           });
        } else if (this.resultadoCasino == this.resultadoPersona) {
            console.log("No hay ganador, el usuario recupera el monto apostado");
            let result: string = 'Numero que salio en los dados del jugador :' + String(this.resultadoPersona) + '\n' + 'Numero que salio en los dados del casino: ' + String(this.resultadoCasino) + '\n' + 'Resultado: Empate' + '\n' +'---------------------'+ '\n';
         fs.appendFile('resultadoDados.txt', result, function (err) {
        if (err) throw err;
        }); 
        }
    }

    getpremio(): number {
        let premio: number = (this.montoApostado) *(this.cantDados);
        return premio;
      }

}

//let juegoDados = new Dados( 2, 100 );
//juegoDados.jugar();