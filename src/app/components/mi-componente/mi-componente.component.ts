import {Component} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';


@Component({
    selector : 'mi-componente',
    templateUrl : './mi-componente.component.html'
    
})


export class MiComponente{
    
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas : boolean;

    constructor(){

        this.titulo = "Titulo del componente";
        this.comentario = "Comentario del componente";
        this.year = 2022;
        this.mostrarPeliculas = true;

        console.log('Mi componente cargado');

        console.log(this.titulo,this.comentario,this.year);

    }
    

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
    
}

