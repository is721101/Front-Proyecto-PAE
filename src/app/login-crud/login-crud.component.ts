import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

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
              private router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.AuthService.signIn(this.employee).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/CRUD']);
      },
      err => console.log(err)
    )
  }
}
