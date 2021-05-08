import { Component, OnInit,HostListener } from '@angular/core';
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

  toHome(){
    document.getElementById("banner").scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }

  toMenu(){
    document.getElementById("menu").scrollIntoView({behavior:"smooth"});
  }

  toExpert(){
    document.getElementById("expert").scrollIntoView({behavior:"smooth"});
  }

  toTestimonials(){
    document.getElementById("testimonials").scrollIntoView({behavior:"smooth"});
  }

  header_variable =true;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop>0 || document.documentElement.scrollTop >0){
      this.header_variable = true;
    }else{
      this.header_variable = false;
    }
  }

   

  toggleMenu(){
      const menuToggle = document.querySelector('.menuToggle');
      const navigation = document.querySelector('.navigation');
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
  }
   



}
