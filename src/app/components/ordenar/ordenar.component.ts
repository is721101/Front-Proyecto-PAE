import { Component, OnInit } from '@angular/core';
import {MesaService} from '../../services/mesa.service'
import {CorreoService} from '../../services/correo.service'
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.less']
})
export class OrdenarComponent implements OnInit {
  id:Number
  correo:string
  codigo:string
  constructor(private mesaService:MesaService,private correoService:CorreoService) { }

  ngOnInit(): void {
  }
  ordenar(formcorreo){
    this.mesaService.OcuparMesa()
    .subscribe(
      res=>{
        
        this.id=res.id
        this.codigo=res.codigo
        this.correo=formcorreo.value
        alert("Num de mesa: "+res.id+" Codigo: "+res.codigo)
        let form={
          id:this.id,
          codigo:this.codigo,
          correo:this.correo
        }
        this.correoService.sendMessage(form)
        .subscribe(
          res=>console.log(res),
          err=>console.log(err)
        )
      },
      err=>{
        alert("Todas las mesas se encuentran llenas, Espere un momento")
        console.log(err)
      }
    )
    return false;
  }
}
