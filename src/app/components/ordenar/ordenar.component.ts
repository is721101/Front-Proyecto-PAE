import { Component, OnInit } from '@angular/core';
import {MesaService} from '../../services/mesa.service'
import {CorreoService} from '../../services/correo.service'
import {Router} from '@angular/router';

import Swal from'sweetalert2';
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.less']
})
export class OrdenarComponent implements OnInit {
  id:Number
  correo:string
  codigo:string
  constructor(private mesaService:MesaService,private correoService:CorreoService,private router: Router) { }

  ngOnInit(): void {
  }
  ordenar(formcorreo){
    this.mesaService.OcuparMesa()
    .subscribe(
      res=>{
        
        this.id=res.id
        this.codigo=res.codigo
        this.correo=formcorreo.value
        //alert("Num de mesa: "+res.id+" Codigo: "+res.codigo)
        let form={
          id:this.id,
          codigo:this.codigo,
          correo:this.correo
        }
        this.correoService.sendMessage(form)
        .subscribe(

          //res=> console.log(res) ,
          res=>console.log(res),
          err=>console.log(err)
        )
        this.mesaService.EnviarCodigo(res.id,res.codigo)
        this.router.navigate(['/login']) 
      },
      err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todas las mesas se encuentran llenas, Espere un momento',
        })

        console.log(err)
      }
    )
    return false;
  }
}
