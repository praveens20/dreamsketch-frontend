import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  empForm!: UntypedFormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly utility: UtilityService,
    public dialogRef: MatDialogRef<EmployeeDetailsComponent>
  ) {}

  ngOnInit(): void {
    this.empForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      empId: new UntypedFormControl('', [Validators.required]),
    });
  }

  addEmployee() {
    this.employeeService
      .createEmployee(this.empForm.value)
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          this.dialogRef.close(true);
        }
        this.utility.showSnackbar(res?.error?.message ?? res?.message);
      });
  }
}
