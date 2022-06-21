import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula !: pelicula;
  @Output() MarcarFavorita = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event: any, pelicula: pelicula) {

    this.MarcarFavorita.emit({
      pelicula: pelicula
    });

  }
}
