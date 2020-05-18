import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegistratiionService } from '../registratiion.service';
import { IEmployee } from '../registrations/employee';
import { Employee } from '../registrations/Employee.Model';

import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login: FormGroup;

    constructor(
        private _employeeService: RegistratiionService,
        private fb: FormBuilder,
        private _router: Router
    ) { }
    loginStatus: string
    employee: Employee = {
        Id: null,
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

    empoyees: IEmployee

    ngOnInit() {
        this.login = this.fb.group({

            userName: [this.employee.Email],
            password: [this.employee.Password],

        })
    }

    onsubmit(): void {
        //console.log(this.employee)

        this._employeeService.CheckRegistration(this.employee.Email, this.employee.Password)
            .subscribe(res => { localStorage.setItem('viewtype','empview'), sessionStorage.setItem('username', this.employee.Email), sessionStorage.setItem('password', this.employee.Password); this._router.navigate(['employee']) }, err => { this.loginStatus = "Loging in Failed: User Name or Password incorrect!" });
        
    }
}
