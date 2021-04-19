import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Mesa} from '../interfaces/Mesa'
@Injectable({
  providedIn: 'root'
})
export class MesaService {
  URI='Http://localhost:3000/ordenar'
  constructor(private http: HttpClient) { }

  OcuparMesa(){
    return this.http.get<Mesa>(this.URI);
  } 
  Liberarmesa(id){

    return this.http.put<Mesa>(this.URI+"/",id);
  }
}
