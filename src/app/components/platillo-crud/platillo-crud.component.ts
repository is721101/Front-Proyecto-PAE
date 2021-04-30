import { Component, OnInit } from '@angular/core';
import { PlatilloCRUDService } from '../../services/platillo-crud.service';
import { NgForm } from '@angular/forms'
import { Platillo } from 'src/app/models/platillos';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo-crud.component.html',
  styleUrls: ['./platillo-crud.component.css']
})
export class PlatilloCRUDComponent implements OnInit {

  constructor(public PlatilloService:  PlatilloCRUDService) { }

  ngOnInit(): void {
    this.getPlatillos();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getPlatillos(){
    this.PlatilloService.getPlatillos().subscribe(
      res => {this.PlatilloService.platillos = res;},
      err => console.log(err)
    )
  }

  addPlatillo(form: NgForm){
    if(form.value._id){
      this.PlatilloService.putPlatillo(form.value).subscribe(
         res => {
                      this.getPlatillos();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.PlatilloService.createPlatillo(form.value).subscribe(
        res => {
          this.getPlatillos();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deletePlatillo(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.PlatilloService.deletePlatillo(_id).subscribe(
        (res) => {
          this.getPlatillos();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editPlatillo(platillo:Platillo){
    this.PlatilloService.selectedPlatillo = platillo;
  }

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
   

  page_size: number = 5
  page_number : number =1

  pageSizeOptions = [5,10,20,50,100]
}
