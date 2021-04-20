import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {PlatillosService} from '../../services/platillos.service'
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.less']
})
export class NotificacionesComponent implements OnInit {
  Notificaciones:Object[];
  Subscription:Subscription;
  constructor(private platilloService: PlatillosService) { 
   
  }
  
  ngOnInit(): void {
    this.platilloService.getNotificaciones()
    .subscribe(
      res=>{this.Notificaciones=res
            console.log(this.Notificaciones)
      },
      err=>console.log(err)
    ) 
    this.Subscription=this.platilloService.NotificationSubject$.subscribe({
      next:(notificacion=>{
        this.Notificaciones.push(notificacion)
        console.log(this.Notificaciones)
        console.log(notificacion)
      }),
      error:(err=>console.log(err))
    })

  }
  Delete(index,id){
    let n={id:id}
    console.log(n)
    this.platilloService.updatenotif(n)
    .subscribe(
      res=>{
        this.Notificaciones.splice(index, 1);
        console.log(res);
      },
      err=>console.log(err)
    )

  }
  ngOnDestroy():void{
    this.Subscription.unsubscribe()
  }
}
