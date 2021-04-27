import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  URL_API = 'http://localhost:3000/api/employees';


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

  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API)
  }

  createEmployee(employee:Employee){
    return this.http.post(this.URL_API,employee);
  }

  putEmployee(employee:Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`,employee);
  }

  deleteEmployee(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }


}
