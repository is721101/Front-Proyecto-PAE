import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employees';
import { Platillo } from '../models/platillos';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  URL_API_PLATILLOS = '/api/platillos';
  URL_API_COCINEROS = '/api/employees/cocineros';


  selectedPlatillo : Platillo ={
    id:0,
    description:'',
    urlImage:'',
    name: '',
    price:'',
    category:''
  };

  selectedEmployee : Employee ={
    id:0,
    name:'',
    lastname:'',
    position:'',
    salary: 0,
    email:'',
    password:'',
    urlImage:''
  };

  platillos : Platillo[];

  employees : Employee[];


  constructor(private http: HttpClient) { }

  getCocineros(){
    return this.http.get<Employee[]>(this.URL_API_COCINEROS)
  }
  getPlatillos(){
    return this.http.get<Platillo[]>(this.URL_API_PLATILLOS)
  }

}
