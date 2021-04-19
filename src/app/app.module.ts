import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdenarComponent } from './components/ordenar/ordenar.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { CrudNavbarComponent } from './components/crud-navbar/crud-navbar.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { MesaCRUDComponent } from './components/mesa-crud/mesa-crud.component';
import { PlatilloCRUDComponent } from './components/platillo-crud/platillo-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlatillosComponent,
    CartComponent,
    OrdenarComponent,
    GraciasComponent,
    NotificacionesComponent,
    CrudNavbarComponent,
    EmployeeCRUDComponent,
    MesaCRUDComponent,
    PlatilloCRUDComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
