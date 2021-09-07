import { Tragamonedas } from './tragamonedas'
import * as fs from 'fs'


export class TragamonedaPlus extends Tragamonedas {

  constructor() {
    super();
    this.montoMin = 5000;
    this.cantCarretes = 5;
  }

  girar(): void {
    let carrete1 = Math.floor(Math.random() * this.figuras.length);
    let carrete2 = Math.floor(Math.random() * this.figuras.length);
    let carrete3 = Math.floor(Math.random() * this.figuras.length);
    let carrete4 = Math.floor(Math.random() * this.figuras.length);
    let carrete5 = Math.floor(Math.random() * this.figuras.length);

    console.log("Carrete 1: ", this.figuras[carrete1]);
    console.log("Carrete 2: ", this.figuras[carrete2]);
    console.log("Carrete 3: ", this.figuras[carrete3]);
    console.log("Carrete 4: ", this.figuras[carrete4]);
    console.log("Carrete 5: ", this.figuras[carrete5]);


    if ((carrete1 == carrete2) && (carrete2 == carrete3) && (carrete3 == carrete4) && (carrete4 == carrete5)) {
      console.log("Felicitaciones, usted quintuplico el valor de su apuesta, su dinero disponible es: " + this.getpremio());
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ' '+ (this.figuras[carrete3])  +(this.figuras[carrete4]) +' '+ (this.figuras[carrete5])  + ' '+ 'Todas las figuras son iguales. Gano Jugador' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
        if (err) throw err;
      });
    } else if ((carrete1 == carrete2) && (carrete2 == carrete3)) {
      console.log("¡¡Bien hecho!!Usted recupero el dinero de su apuesta", this.apuesta)
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ''+ (this.figuras[carrete3])+' '+ (this.figuras[carrete4])  + ''+ (this.figuras[carrete5])  + ' '+ 'Salieron tres figuras iguales consecutivas. El jugador recupera su apuesta' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
        if (err) throw err;
      });
    } else if ((carrete2 == carrete3) && (carrete3 == carrete4)) {
      console.log("¡¡Bien hecho!! Usted recupero el dinero de su apuesta", this.apuesta)
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ''+ (this.figuras[carrete3])+' '+ (this.figuras[carrete4])  + ''+ (this.figuras[carrete5])  + ' '+ 'Salieron tres figuras iguales consecutivas. El jugador recupera su apuesta'  + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
        if (err) throw err;
      });
    } else if ((carrete3 == carrete4 && carrete4 == carrete5)) {
      console.log("¡¡Bien hecho!! Usted recupero el dinero de su apuesta", this.apuesta)
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ''+ (this.figuras[carrete3])+' '+ (this.figuras[carrete4])  + ''+ (this.figuras[carrete5])  + ' '+ 'Salierom tres figuras iguales consecutivas. El jugador recupera su apuesta' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
        if (err) throw err;
      });
    } else {
      console.log("Perdio, Vuelva a intentarlo")
      let result: string = 'Figuras que salieron en la maquina :' + ' ' + (this.figuras[carrete1])  + ' '+  (this.figuras[carrete2])  + ''+ (this.figuras[carrete3])+' '+ (this.figuras[carrete4])  + ''+ (this.figuras[carrete5])  + ' '+ 'Ninguna figura es igual. El jugador pierde su dinero.' + '\n' +'---------------------'+ '\n';
      fs.appendFile('resultadoTragamonedasPlus.txt', result, function (err) {
        if (err) throw err;
      });
    }
  }

  getpremio(): number {
    let premio: number = ((this.apuesta) * 5);
    return premio;
  }
}