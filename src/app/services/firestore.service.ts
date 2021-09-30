import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore : AngularFirestore) { }

  subirActor(object : any){
    return this.firestore.collection('actores').add(object)
    .then((respuesta) => {
      console.log(respuesta);
    }).catch((err) => {
      console.error(err);
    });
  }

  subirPelicula(object : any){
    return this.firestore.collection('peliculas').add(object)
    .then((respuesta) => {
      console.log(respuesta);
    }).catch((err) => {
      console.error(err);
    });
  }
}



