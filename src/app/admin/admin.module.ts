import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'employees', pathMatch: 'full' }, // Redirect unknown routes
];

const components = [
  EmployeeComponent,
  EmployeeListComponent,
  EmployeeInfoComponent,
  DashboardComponent,
  EmployeeDetailsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [...components],
})
export class AdminModule {}
