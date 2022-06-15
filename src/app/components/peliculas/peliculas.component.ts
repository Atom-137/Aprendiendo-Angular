import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy {
  
  
  public titulo:string;
  
  constructor() {
    
    this.titulo = "Esto es un titulo";
    console.log("Constructor lanzado");
    
  }
  
  ngOnInit(): void {
    console.log("onInit lanzado");
  }
  
  ngDoCheck(): void {
    console.log("doCheck lanzado");
    
  }
  
  cambiarTitulo():void{
    this.titulo = "Se cambio el titulo";
  }
  
  ngOnDestroy(){
    
    console.log("El componente se va a eliminar");
  }
}
