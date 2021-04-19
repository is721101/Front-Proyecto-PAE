import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdenarComponent} from './components/ordenar/ordenar.component';
import {LoginComponent} from '../app/components/login/login.component'
import {PlatillosComponent} from '../app/components/platillos/platillos.component'
import { CartComponent } from './components/cart/cart.component';
import { MiddleGuard } from './middle.guard';
import {GraciasComponent} from '../app/components/gracias/gracias.component'
import {NotificacionesComponent} from '../app/components/notificaciones/notificaciones.component'
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"platillos",component:PlatillosComponent, canActivate:[MiddleGuard]},
  {path:"cuenta",component:CartComponent,canActivate:[MiddleGuard]},
  {path:"ordenar",component:OrdenarComponent},
  {path:"agradecimiento",component:GraciasComponent},
  {path:"Notificaciones",component:NotificacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
