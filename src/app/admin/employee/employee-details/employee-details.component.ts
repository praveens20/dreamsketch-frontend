import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  empForm!: UntypedFormGroup;

  constructor(
    private readonly apiService: ApiService,
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
    const { name, empId } = this.empForm.value;

    this.apiService
      .post('http://localhost:3000/employees', {
        name,
        empId,
      })
      .subscribe((res: any) => {
        if (res?.status === 'success') {
          this.dialogRef.close(true);
        } else {
          this.utility.showSnackbar(res?.error?.message ?? res?.message);
        }
      });
  }
}
