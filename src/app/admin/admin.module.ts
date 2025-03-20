import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { MaterialModule } from '../material/material.module';

const components = [
  EmployeeComponent,
  EmployeeListComponent,
  EmployeeInfoComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule],
  exports: [...components],
})
export class AdminModule {}
