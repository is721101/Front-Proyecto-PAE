import { Component, OnInit, Input} from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PlatillosService } from 'src/app/services/platillos.service';
import {MesaService} from 'src/app/services/mesa.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  total=0
  pedidos=<any>[];
  constructor(private router:Router,private pedidoService: PedidosService, private platilloService: PlatillosService,private MesaService:MesaService) { }
//Cambiar por la mesa dinámica
  ngOnInit(): void {
    console.log(this.pedidoService.table)
    this.pedidoService.getPedidos(this.pedidoService.table)
     .subscribe(
      res=>{
        this.pedidos=res
        
    //console.log(this.pedidos)
      this.pedidos.forEach(element => {
      let precio=element.precio
      let cantidad=element.cantidad

      this.total+=(parseInt(precio)*parseInt(cantidad))
    });
      
      
      
      },
      err=>console.log(err)
    )
    
  }
  pay(){
    let noti={mesa:this.pedidoService.table,tipo:"Solicitud de cuenta"}
    this.platilloService.notif(noti).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    let body={
      id:this.pedidoService.table
    }


    this.MesaService.Liberarmesa(body)
    .subscribe(
      res=>{
        this.router.navigate(['/agradecimiento'])
        
      },
      err=>console.log(err)
    )
  }
  getWaiter(){
    let noti={mesa:this.pedidoService.table,tipo:"Solicitud de mesero"}
    this.platilloService.notif(noti).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    alert("En un momento llega tu mesero")

  }

  
}
