import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  empForm!: UntypedFormGroup;
  displayedColumns = ["id", "name"];
  dataSource = new MatTableDataSource();
  opened = false; // Sidebar default state

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.empForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      empId: new UntypedFormControl('', [Validators.required]),
    });
  }

  addEmployee() {
    const { name, empId } = this.empForm.value;

    this.apiService
      .post('https://dreamsketch-backend.onrender.com/employees', {
        name,
        empId,
      })
      .subscribe((res: any) => {
        if (res?.status === 'success') {
        }
      });
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
