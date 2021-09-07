import * as RLS from "readline-sync"
import * as fs from 'fs'

export class Ruleta {
  private resultado: number;
  private montoMinimo: number;
  private montoApostado: number;
  private apuesta: number;

  constructor() {
    this.montoApostado = 0;
    this.resultado = 0;
    this.montoMinimo = 1000;
    this.apuesta = 0;
  }


  public iniciarApuesta():void{
    this.apuesta = RLS.questionInt("Por favor, ingrese un numero del 0 al 32 para comenzar a jugar: ")
    this.montoApostado = RLS.questionInt("Ingrese el monto que desea apostar,el minimo es de $1000 : ")

    if (this.montoApostado < this.montoMinimo) {
      console.log("Lo siento, el monto ingresado no es valido")
    } else {
      this.girarRuleta();
    }
  }


  public girarRuleta():void {
    let randomNumberGenerator = require('random-number-v1');
    let numeroRandom: number = randomNumberGenerator(0, 32);
    console.log("Salio el numero ", numeroRandom);

    if (this.apuesta == numeroRandom) {
      this.resultado = this.getPremio();
      let result: string = 'Numero que salio en la ruleta :' + String(numeroRandom) + '\n' + 'Numero apostado ' + String(this.apuesta) + '\n' + 'Resultado: ' + String(this.resultado) + '\n' + '---------------------' + '\n';
      fs.appendFile('resultadoRuleta.txt', result, function (err) {
        if (err) throw err;
      });
      console.log("Felicitaciones, usted a ganado " + this.resultado);
    } else {
      let result: string = 'Numero que salio en la ruleta :' + String(numeroRandom) + '\n' + 'Numero apostado ' + String(this.apuesta) + '\n' + 'Resultado: Gano el casino' + '\n' + '---------------------' + '\n';
      fs.appendFile('resultadoRuleta.txt', result, function (err) {
        if (err) throw err;
      });
      console.log("Usted perdio, suerte para la proxima");
    }
  }

  public getPremio(): number {
    this.resultado = ((this.apuesta) * 36);
    return this.resultado;
  }

}

