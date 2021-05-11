import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

import Swal from'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private pedidoService: PedidosService, private router:Router) { }

  ngOnInit(): void {
  }

  validate(mesa,id) {
    
    this.pedidoService.getVerify(mesa.value,id.value).subscribe(
      res=>{
        
        if(res=="pasa"){
          this.pedidoService.table=mesa.value
          this.pedidoService.password=id.value
          this.router.navigate(["/platillos"])
        }
        else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Datos incorrectos, vuelve a intentar!'
            })
        }
      },
      err=>{
        console.log(err)
        
      }
    )

    return false
  }
 

}
