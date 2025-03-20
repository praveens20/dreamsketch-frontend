import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dreamsketch-frontend';
  empForm!: FormGroup;
  employees: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.empForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      empId: new FormControl('', [Validators.required]),
    });
    this.getEmployees();
  }

  getEmployees() {
    this.apiService
      .get('https://dreamsketch-backend.onrender.com/employees')
      .subscribe((res) => {
        console.log(res);
        this.employees = res as any[];
      });
  }

  addEmployee() {
    const { name, empId } = this.empForm.value;

    this.apiService
      .post('https://dreamsketch-backend.onrender.com/employees', {
        name,
        empId,
      })
      .subscribe((res) => {
        console.log(res);
        this.getEmployees();
        this.empForm.reset();
      });
  }
}
