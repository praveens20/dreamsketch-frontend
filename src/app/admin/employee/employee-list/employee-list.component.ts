import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['empId', 'empName'];
  employees = new MatTableDataSource();

  constructor(
    private readonly apiService: ApiService,
    private readonly utility: UtilityService
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.apiService
      .get('https://dreamsketch-backend.onrender.com/employees')
      .subscribe((res: any) => {
        if (res?.status === 'success' && res?.data?.length) {
          this.employees.data = res.data;
        } else {
          this.utility.showSnackbar(res?.message);
        }
      });
  }
}
