import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService2 } from '../shared/guards/authService';
import { from, Subscription } from 'rxjs'

@Component({
  selector: 'app-login-crud',
  templateUrl: './login-crud.component.html',
  styleUrls: ['./login-crud.component.css']
})
export class LoginCrudComponent implements OnInit {

  employee = {
    email:'',
    password:''
  };
  constructor(private AuthService:AuthService,
              private router:Router, private socialService: SocialAuthService,private authService2: AuthService2, ) { }

  ngOnInit(): void {
  }

  signIn(){
    this.AuthService.signIn(this.employee).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token', res.token);
        //this.router.navigate(['/CRUD']);
      },
      err => console.log(err)
    )
  }
  
  signWithGoogle() {
    from(this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)).subscribe({
      next: (user: SocialUser) => {
        this.authService2.login(user);
        //localStorage.setItem('token', user.authToken);
        //this.router.navigate(['/CRUD']);
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  
}
