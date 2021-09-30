import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public grupoDeControles !: FormGroup;

  constructor(private fb : FormBuilder, public firestore : FirestoreService) {
   }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'nombre': ['', [Validators.required]],
      'tipo': ['', Validators.required],
      'fechaDeEstreno': ['', Validators.required],
      'cantidadDePublico': ['', Validators.required],
      'actor': ['', Validators.required],
      'fotoDeLaPelicula': ['', Validators.required],
    });
  }

  eventoActor(opcion : any){
    this.grupoDeControles.get('actor')?.setValue(opcion);
  }

  agregarPelicula(){
    this.firestore.subirPelicula(this.grupoDeControles.value);
    this.grupoDeControles.reset();
  }

  private validadorDeTipo(control : AbstractControl) : null | object {

    let tipo : string = control.value;

    tipo = tipo.toLowerCase();

    if(tipo == 'terror' || tipo == 'comedia' || tipo == 'amor' || tipo == 'otros'){
      return {validadorDeTipo : true};
    }else{
      return null;
    }

  }

}
