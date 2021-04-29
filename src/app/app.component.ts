import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cities: City[];
  employees: Employee[];
  selectedCities: City[] = [];
  selectedEmployees: Employee[] = [];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.employees = [
      { employeeName: 'Srinivasa', employeeId: 'NY' },
      { employeeName: 'Umesh', employeeId: 'RM' },
      { employeeName: 'Rajkumar', employeeId: 'LDN' },
      { employeeName: 'Viswas', employeeId: 'IST' },
      { employeeName: 'Ved', employeeId: 'PRS' },
    ];
  }
}

interface City {
  name: string;
  code: string;
}

interface Employee {
  employeeName: string;
  employeeId: string;
}
