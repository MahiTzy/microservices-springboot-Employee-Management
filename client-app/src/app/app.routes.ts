import { Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeesComponent, title: 'Employees'},
  { path: 'departments', component: DepartmentsComponent, title: 'Departments'},
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];
