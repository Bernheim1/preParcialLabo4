import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public grupoDeControles !: FormGroup;

  constructor(private fb : FormBuilder, public firestore : FirestoreService) {
   }

  ngOnInit(): void {
    this.grupoDeControles = this.fb.group({
      'nombre': ['', [Validators.required, this.validadorDeEspacios]],
      'apellido': ['', Validators.required],
      'pais': ['', Validators.required],
    });
  }

  eventoPais(opcion : any){
    this.grupoDeControles.get('pais')?.setValue(opcion);
  }

  private validadorDeEspacios(control : AbstractControl) : null | object {

    let nombre : string = control.value;

    let espacios = nombre.includes(' ');

    if(espacios){
      return {validadorDeEspacios : true};
    }else{
      return null;
    }

  }

  agregarActor(){
    this.firestore.subirActor(this.grupoDeControles.value);
    this.grupoDeControles.reset();
  }
}
