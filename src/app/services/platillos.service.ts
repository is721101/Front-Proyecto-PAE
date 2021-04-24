import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Platillo}from '../interfaces/Platillo'
import { Observable } from 'rxjs';
import {Notificacion} from '../interfaces/Notificacion';
import { Socket, io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  private socket:Socket;
  URI='Http://localhost:3000/menu/'
  constructor(private http: HttpClient) {  
    this.socket = io('ws://localhost:3000')
  ;}


  getPlatillos(){
    return this.http.get<Platillo[]>(this.URI);
  }
  
  getNotificaciones(){
    return this.http.get<Notificacion[]>("http://localhost:3000/notification")
  }
  notif(notification) {
    
    let resp= this.http.post("http://localhost:3000/notification",notification)
    if(resp){
      this.socket.emit('NuevaNotificacion',notification);
      console.log("Notidicacion enviada")
    }
    
    return resp;
  }
  updatenotif(_id){
    return this.http.put<Notificacion>("http://localhost:3000/notification",_id);
  }
  SocketNotificacion() {
    return new Observable<string>(observer => {
      this.socket.on('Notificaciones', notif => {
        observer.next(notif);
      })
    })
  }
}
