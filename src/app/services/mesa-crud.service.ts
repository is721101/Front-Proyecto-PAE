import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Mesa } from '../models/mesas';

@Injectable({
  providedIn: 'root'
})
export class MesaCRUDService {

  URL_API = 'http://localhost:3000/api/mesas';

  selectedMesa : Mesa ={
    nombre:'',
    id:'',
    activo: 0
  };

  mesas : Mesa[];

  constructor(private http: HttpClient) { }

  getMesas(){
    return this.http.get<Mesa[]>(this.URL_API)
  }

  createMesa(mesa:Mesa){
    return this.http.post(this.URL_API,mesa);
  }

  putMesa(mesa:Mesa){
    return this.http.put(`${this.URL_API}/${mesa._id}`,mesa);
  }

  deleteMesa(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  

}
