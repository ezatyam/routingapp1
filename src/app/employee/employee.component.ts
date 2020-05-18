import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { RegistratiionService } from '../registratiion.service';
import { IEmployee } from '../registrations/employee';
import { Employee } from '../registrations/Employee.Model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    registration: FormGroup;
    employee: Employee = {
        id:null,
        FirstName: null,
        LastName: null,
        Gender: null,
        Email: null,
        Phone: null,
        Password: null,
        SecurityQuestion: null,
        Answer: null
    }

    constructor(private fb: FormBuilder, private _employeeService: RegistratiionService) { }
    
    id: string
    ngOnInit() {
        const ids = localStorage.getItem('id');
        this.id = ids;
        //console.log([this.id])
        this._employeeService.GetRegistrationbyId(this.id)
            .subscribe((employeedata) => this.employee = employeedata)
    }
    onsubmit(emp: Employee): void {
        
        const empid = localStorage.getItem('id');
        this.id = empid
        //console.log([emp], [this.id])
        this._employeeService.putRegistration(emp, this.id)

        }
    
}
