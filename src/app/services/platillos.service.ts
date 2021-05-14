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
  URI='/menu/'
  constructor(private http: HttpClient) {  
    this.socket = io(location.origin.replace(/^http/, 'ws')) //localhost:3000
  ;}


  getPlatillos(){
    return this.http.get<Platillo[]>(this.URI);
  }
  
  getNotificaciones(){
    return this.http.get<Notificacion[]>("/notification")
  }
  notif(notification) {
    
    let resp= this.http.post<object>("/notification",notification)
    if(resp){
      this.socket.emit('NuevaNotificacion',notification);
      }
      
      return resp;
    }
  updatenotif(_id){
    return this.http.put<Notificacion>("/notification",_id);
  }
  SocketNotificacion() {
    return new Observable<string>(observer => {
      this.socket.on('Notificaciones', notif => {
        observer.next(notif);
      })
    })
  }
}
