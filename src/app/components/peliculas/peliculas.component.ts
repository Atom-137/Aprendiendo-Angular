import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy {
  
  
  public titulo:string;
  public peliculas : pelicula[];
  
  constructor() {
  
    this.titulo = "Esto es un titulo";
    console.log("Constructor lanzado");
    this.peliculas =[

      new pelicula("Spiderman 4", 2019, "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/10/hipertextual-tobey-maguire-y-andrew-garfield-aparecerian-spider-man-3-y-universo-cinematografico-marvel-2020175510.jpg?fit=1200%2C604&quality=50&strip=all&ssl=1"),
      new pelicula("Los vengadores", 2020, "https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_avengers-endgame_mob_m_928f44f1.jpeg?region=100,0,600,600"),
      new pelicula("Los simpson", 2022, "https://sire-media-foxes.fichub.com/generic/serie-main/473.1024x576.jpg"),
      
    ];
    
  }
  
  ngOnInit(): void {
    console.log(this.peliculas);
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
