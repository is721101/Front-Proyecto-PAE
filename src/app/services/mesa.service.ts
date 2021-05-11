import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Mesa} from '../interfaces/Mesa'
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  URI='Http://localhost:3000/ordenar'
  private socket:Socket;
  constructor(private http: HttpClient) { 
    this.socket = io('ws://localhost:3000')
  }

  OcuparMesa(){
     return this.http.get<any>(this.URI);

  }
  EnviarCodigo(mesa,codigo){
    let x={
      id:mesa,
      codigo:codigo
    }
    this.socket.emit('NuevaOrden',x);
  } 
  Liberarmesa(id){
    let resp =this.http.put<Mesa>(this.URI+"/",id);
    if(resp){
      this.EnviarCodigo(id.id,"Libre")
    }
    
    return resp;
  }
  SocketMesa() {
    return new Observable<any>(observer => {
      this.socket.on('CambiarCodigo', mesa => {
        console.log(mesa)
        observer.next(mesa);
      })
    })
  }
}
