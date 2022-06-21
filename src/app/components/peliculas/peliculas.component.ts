import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';



@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy {
  
  
  public titulo:string;
  public peliculas : pelicula[];
  public favorita !: pelicula;
  public fecha : any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
  
    this.titulo = "Esto es un titulo";
    console.log("Constructor lanzado");
    this.peliculas = this._peliculaService.getPeliculas();

    this.fecha = new Date(2020,8,11);
    
  }
  
  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("onInit lanzado");
    console.log(this._peliculaService.holaMundo);
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

  mostrarFavorita(event: any){

    this.favorita = event.pelicula;
  }
}
