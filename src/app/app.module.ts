import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'

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
import { LoginCrudComponent } from './components/login-crud/login-crud.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from './services/token-interceptor.service';
import { PaginatePipe } from './pipes/paginate.pipe';


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
    LoginCrudComponent,
    LandingPageComponent,
    PaginatePipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
