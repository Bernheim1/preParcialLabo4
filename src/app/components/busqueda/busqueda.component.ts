import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  tablaPelicula : boolean = false;
  peliculaDetalle : any;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTablaPeliculas(){
    this.tablaPelicula = !this.tablaPelicula;
  }

  eventoPelicula(evento : any){
    this.peliculaDetalle = evento;
  }

  limpiarPeliculaDetalle(){
    this.peliculaDetalle = null;
  }
}
