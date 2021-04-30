import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private AuthService:AuthService) { }

  intercept(req,next){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.AuthService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

  

}
