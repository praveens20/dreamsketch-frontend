import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['empId', 'empName'];
  employees = new MatTableDataSource();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.apiService
      .get('https://dreamsketch-backend.onrender.com/employees')
      .subscribe((res) => {
        console.log(res);
        this.employees.data = res as any[];
      });
  }
}
