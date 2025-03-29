import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { UtilityService } from 'src/app/services/utility.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['empId', 'empName'];
  employees = new MatTableDataSource();

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly utility: UtilityService
  ) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((res: any) => {
      if (res?.status === 'success' && res?.data?.length) {
        this.employees.data = res.data;
      } else {
        this.utility.showSnackbar(res?.message);
      }
    });
  }

  openEmployeeDialog() {
    const dialogRef = this.utility.openDialog(EmployeeDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) this.fetchEmployees();
    });
  }
}
