import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './admin/employee/employee.component';

const routes: Routes = [
  { path: 'admin', component: EmployeeComponent }, // Set as default route
  { path: '**', redirectTo: 'admin', pathMatch: 'full' }, // Redirect unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
