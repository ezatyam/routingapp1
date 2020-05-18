import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from './registrations/employee';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Employee } from './registrations/Employee.Model';
@Injectable({
    providedIn: 'root'
})
export class RegistratiionService {
    registration: FormGroup;
    constructor(private _http: Http, private fb: FormBuilder) { }

    ngOnInit() {
        //this.registration = new FormGroup({
        //  FirstName: new FormControl(),
        //  LastName: new FormControl(),
        //  Gender: new FormControl(),
        //  Phone: new FormControl(),
        //  Email: new FormControl(),
        //  SecurityQuestion: new FormControl(),
        //  Answer: new FormControl(),
        //  Password: new FormControl(),
        //})
       
    }
    getRegistration(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:57387/api/Registers")
            .map((response: Response) => <IEmployee[]>response.json());
        //[
        //  { FirstName: "Test first name 1", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //  , { FirstName: "Test first name 2", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //  , { FirstName: "Test first name 3", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //]
    }
    
    employees: IEmployee;
    postRegistration(emp: Employee): void {
        this.registration = this.fb.group({
            FirstName: [emp.FirstName],
            LastName: [emp.LastName],
            Gender: [emp.Gender],
            Phone: [emp.Phone],
            Email: [emp.Email],
            SecurityQuestion: [emp.SecurityQuestion],
            Answer: [emp.Answer],
            Password: [emp.Password]
        })
        this._http.post("http://localhost:57387/api/Registers", this.registration.value)
            .subscribe();
        

        //console.log(fb.Answer)
            //.map((response: Response) => <IEmployee[]>response.json());
        //[
        //  { FirstName: "Test first name 1", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //  , { FirstName: "Test first name 2", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //  , { FirstName: "Test first name 3", LastName: "Test FirstName name", Gender: "Male", Phone: "1111111e", Email: "Email", SecurityQuestion: "What is your Birthdate?", Answer: "Test Answer", Password: "Password", }
        //]
    }
}
