import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  URI:string;
  Key="22f184c52b36ca768a1746bcea2fb9b0"
  
  constructor(private http: HttpClient) {
    this.URI='http://api.openweathermap.org/data/2.5/weather?q=Tlaquepaque&appid='+this.Key+'&units=metric'
   }

  getClima(){
    return this.http.get(this.URI);
  }
}
