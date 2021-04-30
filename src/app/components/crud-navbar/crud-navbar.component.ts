import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud-navbar',
  templateUrl: './crud-navbar.component.html',
  styleUrls: ['./crud-navbar.component.less']
})
export class CrudNavbarComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

   logOut(){
    this.authService.logout()
   }

}

 