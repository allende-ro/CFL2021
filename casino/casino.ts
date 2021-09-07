import {Tragamonedas} from './tragamonedas';
import {TragamonedaPlus} from './tragaMonedasPlus';
import {Dados} from './dados';
import {Ruleta} from './ruleta';

export class Casino {

    public tragamonedas: Tragamonedas;
    public tragamonedasPlus: TragamonedaPlus;
    public juegoDados: Dados;
    public ruleta:Ruleta;
    
    public constructor(){
        this.tragamonedas = new Tragamonedas(); 
        this.tragamonedasPlus = new TragamonedaPlus();
        this.ruleta = new Ruleta();
        this.juegoDados = new Dados();
    }



}