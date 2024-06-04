import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  jobCategories = ['technology', 'social', 'sciences', 'doctor'];
  newEmployee = new Employee(1, 'Binh', new Date(), this.jobCategories[0]);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  addNewEmployee() {
    this.newEmployee = new Employee(
      Math.floor(Date.now()),
      '',
      new Date(),
      '',
      ''
    );
  }
  constructor() {}
  ngOnInit(): void {}
}
