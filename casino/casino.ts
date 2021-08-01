import {Tragamonedas} from './tragamonedas';
import {TragamonedaPlus} from './tragaMonedasPlus';
import {Dados} from './dados';
import {Ruleta} from './ruleta';

export class Casino {

    public Tragamonedas: Tragamonedas;
    public TragamonedasPlus: TragamonedaPlus;
    public JuegoDados: Dados;
    public Ruleta:Ruleta;
    
    public constructor(){
        this.Tragamonedas = new Tragamonedas(); 
        this.TragamonedasPlus = new TragamonedaPlus();
        this.Ruleta = new Ruleta();
        this.JuegoDados = new Dados();
    }



}