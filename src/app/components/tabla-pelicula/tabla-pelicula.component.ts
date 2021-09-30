import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  
  coleccion : any;
  peliculas : any;
  peliculasBD : any;
  @Output() peliculaDetalle = new EventEmitter<string>();

  constructor(private db : AngularFirestore) { 
    this.coleccion = this.db.collection<Pelicula>('peliculas');
    this.peliculas = this.coleccion.valueChanges();
  }

  ngOnInit(): void {
    this.peliculas.subscribe((peliculas : any) => {
      this.peliculasBD = peliculas;
    })
  }

  setOutput(opcion : any){
    console.log(opcion);
    this.peliculaDetalle.emit(opcion);
  }

}
