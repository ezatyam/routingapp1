﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../registrations/employee';
import { RegistratiionService } from '../registratiion.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

    employees: IEmployee[];
    selectEmployeeCountRadioButton: string = 'All'

    constructor(private _employeeService: RegistratiionService, private _router :Router) {
        //this.employees = this._employeeService.getRegistration();
    }

    ngOnInit() {
        localStorage.clear()
        this.loaddata();
    }
    getTotalEmployeeCount(): number {
        //return this.employees.length;
        return 0
    }

    editdata(id: string) {
        localStorage.setItem('id', id)
        //console.log([id])
        localStorage.setItem('viewtype', 'adminview')
        this._router.navigate(['../employee'])
    }
    deletedata(id: string) {
        //const empid = localStorage.getItem('id');
        if (confirm('Are u sure to delete record')) {
            this._employeeService.deleteRegistrationbyId(id)
            this.loaddata();
            location.reload()
        }
      
    }
    addnew(type): void {
        localStorage.setItem('viewtype', type)
        //console.log([id])
        this._router.navigate(['employee'])
    }
    loaddata(): void {
        this._employeeService.getRegistration()
            .subscribe((employeedata) => this.employees = employeedata)
    }

}
