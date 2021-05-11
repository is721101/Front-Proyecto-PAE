import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  
  constructor(private http: HttpClient) {}

  getClima(){

    return  this.http.get<string>('http://localhost:3000/clima');
    
  }
}
