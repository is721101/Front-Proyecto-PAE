import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { BehaviorSubject, from, Subject } from "rxjs";

@Injectable()
export class AuthService2 {
  user$: BehaviorSubject<SocialUser | null> = new BehaviorSubject(this.getUser());
  constructor(private http: HttpClient, private socialService: SocialAuthService, private router:Router) {

  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  login(user: SocialUser) {
    this.user$.next(user);

    this.http.post('/api/employees/verify',{"email":user.email}).subscribe(response=>{
      if(response){
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.authToken);
        this.router.navigate(['/CRUD']);
      }else{
        alert("No tienes acceso")
        this.logout()
      }
    })

  }

  logout() {
    localStorage.removeItem('user');
    this.socialService.signOut()
    this.user$.next(null);
  }

  isLoggedIn() {
    return Boolean(this.user$.value);
  }
}