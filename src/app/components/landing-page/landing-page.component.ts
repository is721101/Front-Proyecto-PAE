import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { NgForm } from '@angular/forms'
import { Platillo } from 'src/app/models/platillos';
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  constructor(public LandingPageService:  LandingPageService) { }

  ngOnInit(): void {
    this.getPlatillos();
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getPlatillos(){
    this.LandingPageService.getPlatillos().subscribe(
      res => {this.LandingPageService.platillos = res;},
      err => console.log(err)
    )
  }

  getEmployees(){
    this.LandingPageService.getCocineros().subscribe(
      res => {this.LandingPageService.employees = res;},
      err => console.log(err)
    )
  }
}
