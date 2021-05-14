import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = '/api/auth';

  constructor(private http: HttpClient, private router: Router) {
    
    
  }
  signIn(employee){
    return this.http.post<any>(this.URL + '/signin-crud',employee);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/CRUD/login']);
  }

}
