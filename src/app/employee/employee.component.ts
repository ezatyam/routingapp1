import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employeeForm: FormGroup
  constructor() { }

  ngOnInit(): void {
      this.employeeForm = new FormGroup({
          email: new FormControl(),
          password: new FormControl()
      })
  }
  OnSubmit(): void {
      console.log(this.employeeForm.value)
  }
}
