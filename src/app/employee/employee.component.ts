import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { RegistratiionService } from '../registratiion.service';
import { IEmployee } from '../registrations/employee';
import { Employee } from '../registrations/Employee.Model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    registration: FormGroup;
    employee: Employee = {
        Id:null,
        FirstName: null,
        LastName: null,
        Gender: null,
        Email: null,
        Phone: null,
        Password: null,
        SecurityQuestion: null,
        Answer: null,
        CPassword: null,
    }
    viewtype: string
    constructor(private _router:Router,private fb: FormBuilder, private _employeeService: RegistratiionService) { }
    UserName: string
    Password: string
    id: string
    ngOnInit() {
        const vtype = localStorage.getItem('viewtype')
        this.viewtype = vtype
        this.registration = this.fb.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Gender: ['', Validators.required],
            Phone: ['', Validators.required],
            Email: ['', Validators.required],
            SecurityQuestion: ['', Validators.required],
            Answer: ['', Validators.required],
            Password: ['', Validators.required],
        })

        if (this.viewtype == "adminview")
        {

            if (localStorage.getItem('id')) {
                const ids = localStorage.getItem('id');
                this.id = ids;
                //console.log([this.id])
                this._employeeService.GetRegistrationbyId(this.id)
                    .subscribe((employeedata) => this.employee = employeedata)
            } 
        }
        if (this.viewtype == "empview")
        {
            if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
                const uname = sessionStorage.getItem('username');
                const psw = sessionStorage.getItem('password');
                this.UserName = uname;
                this.Password = psw;
                this._employeeService.CheckRegistration(this.UserName, this.Password)
                    .subscribe((employeedata) => this.employee = employeedata)
            }
        }

        if (this.viewtype == "new") {
            this.employee.Gender = "Select"
        }
        
    }
    onsubmit(emp: Employee): void {
        if (emp.Id)
        {
            const empid = localStorage.getItem('id');
            this.id = empid
            //console.log([emp], [this.id])
            this._employeeService.putRegistration(emp, this.id)
            this._router.navigate(['employeelist'])

        } else {
            this._employeeService.postRegistration(emp)
            this._router.navigate(['employeelist'])
        }
      

    }
    Self(type: string): void {
        localStorage.setItem('viewtype', type)
        location.reload();
    }
    
}
