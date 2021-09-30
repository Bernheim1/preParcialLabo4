import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  {path: 'peliculas', loadChildren: () => import('./modules/peliculas/peliculas.module').then(m => m.PeliculasModule)},
  {path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule)},
  {path: 'busqueda', component: BusquedaComponent},
  {path: '', component: BienvenidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
