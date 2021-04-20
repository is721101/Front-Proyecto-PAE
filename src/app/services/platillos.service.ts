import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Platillo}from '../interfaces/Platillo'
import {Subject} from 'rxjs'
import {Notificacion} from '../interfaces/Notificacion'
@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  URI='Http://localhost:3000/menu/'

  NotificationSubject$:Subject<Object>=new Subject()
  constructor(private http: HttpClient) { }


  getPlatillos(){
    return this.http.get<Platillo[]>(this.URI);
  }
  
  getNotificaciones(){
    return this.http.get<Notificacion[]>("http://localhost:3000/notification")
  }
  notif(notification) {
    
    let resp= this.http.post("http://localhost:3000/notification",notification)
    if(resp){
      console.log("Entro")
      this.NotificationSubject$.next(resp)
    }
    
    return resp;
  }
  updatenotif(_id){
    return this.http.put<Notificacion>("http://localhost:3000/notification",_id);
  }
}
