import { Injectable } from '@angular/core';
import { CanActivate  } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service'
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private AuthService:AuthService,
              private router:Router){

  }

  canActivate():boolean{
    if(this.AuthService.loggedIn()){
      return true;
    }

    this.router.navigate(['/CRUD/login']);
    return false;
  }
    
  
  
}
