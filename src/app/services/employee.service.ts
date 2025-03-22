import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private readonly apiService: ApiService) {}

  getEmployees() {
    return this.apiService.get(
      'https://dreamsketch-backend.onrender.com/employees'
    );
  }

  createEmployee(employee: any) {
    const { name, empId } = employee;

    return this.apiService.post(
      'https://dreamsketch-backend.onrender.com/employees',
      {
        name,
        empId,
      }
    );
  }
}
