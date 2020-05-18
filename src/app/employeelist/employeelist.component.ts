import { Component, OnInit } from '@angular/core';

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

    constructor(private _employeeService: RegistratiionService) {
        //this.employees = this._employeeService.getRegistration();
    }

    ngOnInit() {
        this._employeeService.getRegistration()
            .subscribe((employeedata) => this.employees = employeedata)
    }
    getTotalEmployeeCount(): number {
        //return this.employees.length;
        return 0
    }

}
