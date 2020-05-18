import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './list/list.component';;
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';;
import { TestComponent } from './test/test.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { EmployeelistComponent } from './employeelist/employeelist.component'
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
    { path: "employee", component: EmployeeComponent },
    { path: "list", component: ListComponent },
    { path: "registrations", component: RegistrationsComponent },
    { path: "test", component: TestComponent },
    { path: "employeelist", component: EmployeelistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListComponent,
    TestComponent,
    RegistrationsComponent,
    EmployeelistComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      ReactiveFormsModule,
      AppRoutingModule,
      HttpModule,
      BrowserModule,
      FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
