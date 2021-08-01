import { stringify } from "querystring";
import * as RLS from "readline-sync";
import * as fs from 'fs'


export class Tragamonedas {
  //atributos 
  protected premio: Number;
  protected montoMin: Number;
  protected cantCarretes: Number;
  protected figuras: string[];
  protected apuesta: Number;

  //costructor de objetos
  constructor() {
    this.premio = 0;
    this.montoMin = 1000;
    this.cantCarretes = 3;
    this.apuesta = 0;
    this.figuras = ["NumeroSiete", "Manzanas", "Peras", "Bananas", "CartaPoker", "Moneda", "Diamante", "Uvas", "Anillo", "Kiwi"];
  }
   //
  comenzar(): void {
    if (this.apuesta < this.montoMin) {
      console.log("El monto ingresado es invalido para comenzar a jugar");
    } else {
      console.log("Perfecto, a jugar");
      this.girar();
    }
  }

  girar(): void {
    let carrete1 = Math.floor(Math.random() * this.figuras.length);
    let carrete2 = Math.floor(Math.random() * this.figuras.length);
    let carrete3 = Math.floor(Math.random() * this.figuras.length);
    console.log("Carrete 1: ",this.figuras[carrete1]);
    console.log("Carrete 2: ",this.figuras[carrete2]);
    console.log("Carrete 3: ",this.figuras[carrete3]);

    if (carrete1 == carrete2 && carrete2 == carrete3) {
      console.log("Felicitaciones, usted triplico el valor de su apuesta, su dinero disponible es: " + this.getpremio());
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ' '+ (this.figuras[carrete3])  + ' '+ 'Todas las figuras son iguales. Gano Jugador' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
        if (err) throw err;
      });
    } else if (carrete1 == carrete2 || carrete2 == carrete3 || carrete1 == carrete3 ) {
      console.log("¡¡Bien hecho!!Usted recupero el dinero de su apuesta", this.apuesta);
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1]) + ' ' +(this.figuras[carrete2]) + ' '  +  (this.figuras[carrete3]) + ' ' + 'Dos figuras son iguales. Jugador salvo su dinero apostado' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
        if (err) throw err;
      });
    } else {
      console.log("Perdio, Vuelva a intentarlo");
      let result: string = 'Figuras que salieron en la maquina :'+ '\n' + (this.figuras[carrete1])+ '\n' +  (this.figuras[carrete2]) + '\n' +(this.figuras[carrete3])+  '\n'+ 'Ninguna de las figuras son iguales. Jugador perdio' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedas.txt', result, function (err) {
        if (err) throw err;
      });
    }

  }

  public setapuesta(apuestaJugador: Number): void {
    this.apuesta = apuestaJugador;
  }

  public getpremio(): Number {
    let premio: Number = (Number(this.apuesta) * 2);
    return premio;
  }

  

}
//cierre de clase
