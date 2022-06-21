import {Pipe, PipeTransform}   from '@angular/core';

@Pipe({

    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){

        var  espar = "No es par";
        if(value%2 == 0){
            espar = "Es un numero par";

        }

        return "El anio es: " + value + " y " + espar;
    }

}