import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import {PlatillosService} from '../../services/platillos.service'
import Swal from'sweetalert2';
import {ClimaService} from '../../services/clima.service'

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.less']
})
export class PlatillosComponent implements OnInit {
  temperatura:any
  platillos=[];
  platilloSelected={
    price:null,
    description:null,
    name:null,
    amount:0,
    table:null
  }
  constructor(private clima: ClimaService,private router: Router,private platilloService: PlatillosService,private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.clima.getClima()
    .subscribe(
      res=>this.temperatura=res,
      err=>console.log(err)
    )
    this.platilloService.getPlatillos()
    .subscribe(
      res=>this.platillos=res,
      err=>console.log(err)
    )
  }
  //Cada que se abre el modal, se reinician los valores
  loadData(plato){
    this.platilloSelected.name=plato.name
    this.platilloSelected.description=plato.description
    this.platilloSelected.price=plato.price  
    this.platilloSelected.amount=0 
    this.platilloSelected.table=this.pedidoService.table
  }
  getWaiter(){
    this.platilloService.notif({mesa:this.pedidoService.table,tipo:"Solicitud de mesero"}).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    Swal.fire({
      icon: 'success',
      title: 'En un momento llegará un mesero a atenderlo'
    })
  }
  //Suma y resta del modal
  suma(){
    this.platilloSelected.amount++
  }
  resta(){
    if(this.platilloSelected.amount==0){
      alert("No puede pedir cantidades negativas")
  }
  else{
   this.platilloSelected.amount--
  }
  }
  //Envía los pedidos a la base de datos
  sendPedido(){
    this.pedidoService.createPedido(this.platilloSelected)
    .subscribe(
      res=>{
        console.log("Enviado")
        let noti={mesa:this.pedidoService.table,tipo:"Servir "+this.platilloSelected.amount+" "+this.platilloSelected.name}
        console.log(noti)
        this.platilloService.notif(noti).subscribe(
          res=>console.log(res),
          err=>console.log(err)
        )
      },
      err=>console.log("No enviado")
    )
  }

  HamburguersSelected(){
    
  }

  EntradasSelected(){

  }

  PostresSelected(){

  }

  EnsaladasSelected(){

  }


  
}
