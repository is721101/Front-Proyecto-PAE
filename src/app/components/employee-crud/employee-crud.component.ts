import { Component, OnInit } from '@angular/core';
import { EmployeeCRUDService } from '../../services/employee-crud.service';
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/models/employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {

  constructor(public EmployeeService : EmployeeCRUDService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getEmployees(){
    this.EmployeeService.getEmployees().subscribe(
      res => {this.EmployeeService.employees = res;},
      err => console.log(err)
    )
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.EmployeeService.putEmployee(form.value).subscribe(
         res => {
                      this.getEmployees();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.EmployeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteEmployee(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.EmployeeService.deleteEmployee(_id).subscribe(
        (res) => {
          this.getEmployees();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editEmployee(employee:Employee){
    this.EmployeeService.selectedEmployee = employee;
  }

}
