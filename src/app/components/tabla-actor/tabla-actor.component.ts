import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  coleccion : any;
  actores : any;
  actoresBD : any;
  @Output() actorSeleccionado = new EventEmitter<string>();

  constructor(private db : AngularFirestore) { 
    this.coleccion = this.db.collection<any>('actores');
    this.actores = this.coleccion.valueChanges();
  }

  ngOnInit(): void {
    this.actores.subscribe((actores : any) => {
      this.actoresBD = actores;
    })
  }

  setOutput(nombre : any, apellido : any){
    let aux = nombre + ' ' + apellido;
    this.actorSeleccionado.emit(aux);
  }

}
