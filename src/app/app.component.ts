import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dreamsketch-frontend';
  empForm!: UntypedFormGroup;

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
      .subscribe((res) => {
        console.log(res);
        this.empForm.reset();
      });
  }
}
