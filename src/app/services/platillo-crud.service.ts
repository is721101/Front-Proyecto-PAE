import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Platillo } from '../models/platillos';


@Injectable({
  providedIn: 'root'
})
export class PlatilloCRUDService {

  URL_API = '/api/platillos';

  selectedPlatillo : Platillo ={
    id:0,
    description:'',
    urlImage:'',
    name: '',
    price:'',
    category:''
  };

  platillos : Platillo[];

  constructor(private http: HttpClient) { }

  getPlatillos(){
    return this.http.get<Platillo[]>(this.URL_API)
  }

  createPlatillo(platillo:Platillo){
    return this.http.post(this.URL_API,platillo);
  }

  putPlatillo(platillo:Platillo){
    return this.http.put(`${this.URL_API}/${platillo._id}`,platillo);
  }

  deletePlatillo(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
 
