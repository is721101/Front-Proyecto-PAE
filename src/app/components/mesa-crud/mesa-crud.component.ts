import { Component, OnInit } from '@angular/core';
import { MesaCRUDService } from '../../services/mesa-crud.service';
import  {MesaService} from '../../services/mesa.service'
import { NgForm } from '@angular/forms'
import { Mesa } from 'src/app/models/mesas';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa-crud.component.html',
  styleUrls: ['./mesa-crud.component.css']
})
export class MesaCRUDComponent implements OnInit {
  MESAS:Mesa[];
  Subscription:Subscription;
  constructor(public MesaService:MesaCRUDService,public ServiceMesa:MesaService) { }

  ngOnInit(): void {
    this.getMesas();
    this.Subscription=this.ServiceMesa.SocketMesa().subscribe({
      next:(mesa=>{
        console.log(mesa.id);
        let m=this.MESAS.findIndex(x=>x.id=mesa.id);
        this.MESAS[m].codigo=mesa.codigo
        if(this.MESAS[m].activo){
          this.MESAS[m].activo=false
        }
        else{
          this.MESAS[m].activo=true
        }

      }),
      error:(err=>console.log(err))
    })
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getMesas(){
    this.MesaService.getMesas().subscribe(
      res => {this.MESAS = res;},
      err => console.log(err)
    )
  }

  addMesa(form: NgForm){
    if(form.value._id){
      this.MesaService.putMesa(form.value).subscribe(
         res => {
                      this.getMesas();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.MesaService.createMesa(form.value).subscribe(
        res => {
          this.getMesas();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteMesa(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.MesaService.deleteMesa(_id).subscribe(
        (res) => {
          this.getMesas();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editMesa(mesa:Mesa){
    this.MesaService.selectedMesa = mesa;
  }

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
  ngOnDestroy():void{
    this.Subscription.unsubscribe()
  }
   

  page_size: number = 5
  page_number : number =1

  pageSizeOptions = [5,10,20,50,100]
}
