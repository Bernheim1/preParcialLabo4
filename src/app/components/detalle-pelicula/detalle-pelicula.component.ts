import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaDetalle : any;

  constructor() { }

  ngOnInit(): void {
  }

  

}
