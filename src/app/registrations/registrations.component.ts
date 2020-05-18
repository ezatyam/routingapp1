import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Key } from 'protractor';
import { RegistratiionService } from '../registratiion.service';
import { IEmployee } from '../registrations/employee';
import { Employee } from '../registrations/Employee.Model';
@Component({
    selector: 'app-registrations',
    templateUrl: './registrations.component.html',
    styleUrls: ['./registrations.component.css']
    
})
export class RegistrationsComponent implements OnInit {
    registration: FormGroup;
    //private _employee: Employee
    //@Input()
    //set employee(val: Employee) {
    //    this._employee = val
    //}
    //get employee(): Employee {
    //    return this._employee
    //}

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

    ngOnInit() {
        this.registration = new FormGroup({
          FirstName: new FormControl(),
          LastName: new FormControl(),
          Gender: new FormControl(),
          Phone: new FormControl(),
          Email: new FormControl(),
          SecurityQuestion: new FormControl(),
          Answer: new FormControl(),
          Password: new FormControl(),
        })
        //this.registration = this.fb.group({
        //    FirstName: ['', Validators.required],
        //    LastName: [''],
        //    Gender: [''],
        //    Phone: [''],
        //    Email: [''],
        //    SecurityQuestion: [''],
        //    Answer: [''],
        //    Password: [''],
        //})
    }

    //logKeyValuePairs(group: FormGroup): void {
    //    Object.keys(group.controls).forEach((key: string) => {
    //        const abstractControl = group.get(key);
    //        if (abstractControl instanceof FormGroup) {
    //            this.logKeyValuePairs(abstractControl);

    //        } else {
    //            console.log('Key=' + key + ' value =' + abstractControl.value);
    //            //abstractControl.disable()
    //        }
    //    });
    //}

    onLoadDataClick(): void {
        //this.registration.setValue({
        //  FirstName: "Test first name",
        //  LastName: "Test FirstName name",
        //  Gender: "Male",
        //  Phone: "1111111e",
        //  Email: "Email",
        //  SecurityQuestion: "What is your Birthdate?",
        //  Answer: "Test Answer",
        //  Password: "Password",
        //})
        //this.logKeyValuePairs(this.registration)
    }
    onsubmit(emp: Employee): void {
        //console.log(this.registration.value)
        //this.emp.FirstName = this.FormGroup

       // console.log(emp);
        this._employeeService.postRegistration(emp)
    }

}
