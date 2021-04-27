import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdenarComponent} from './components/ordenar/ordenar.component';
import {LoginComponent} from '../app/components/login/login.component'
import {PlatillosComponent} from '../app/components/platillos/platillos.component'
import { CartComponent } from './components/cart/cart.component';
import { MiddleGuard } from './middle.guard';
import {GraciasComponent} from '../app/components/gracias/gracias.component'
import {NotificacionesComponent} from './components/notificaciones/notificaciones.component'
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { MesaCRUDComponent } from './components/mesa-crud/mesa-crud.component';
import { PlatilloCRUDComponent } from './components/platillo-crud/platillo-crud.component';
import { LoginCrudComponent } from './login-crud/login-crud.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


 
const routes: Routes = [
  {path:"",component:LandingPageComponent},
  {path:"login",component:LoginComponent},
  {path:"platillos",component:PlatillosComponent, canActivate:[MiddleGuard]},
  {path:"cuenta",component:CartComponent,canActivate:[MiddleGuard]},
  {path:"ordenar",component:OrdenarComponent},
  {path:"agradecimiento",component:GraciasComponent},
  {path: 'CRUD',component:EmployeeCRUDComponent},
  {path: 'CRUD/employees',component:EmployeeCRUDComponent},
  {path: 'CRUD/mesas',component:MesaCRUDComponent},
  {path: 'CRUD/platillos',component:PlatilloCRUDComponent},
  {path: 'CRUD/login', component:LoginCrudComponent},
  {path: 'CRUD/notificaciones', component:NotificacionesComponent},
  {path: 'landingpage',component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
