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
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectInfoComponent } from './project/project-info/project-info.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'roles', component: RoleComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect unknown routes
];

const components = [
  EmployeeComponent,
  EmployeeListComponent,
  EmployeeInfoComponent,
  DashboardComponent,
  EmployeeDetailsComponent,
  ProjectComponent,
  ProjectListComponent,
  ProjectInfoComponent,
  ProjectDetailsComponent,
  RoleComponent,
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
