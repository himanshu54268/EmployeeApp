import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserModule } from './create-user/create-user.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmpDashboardModule } from './emp-dashboard/emp-dashboard.component.module';

const routes: Routes = [
  { 
    path: 'emp-dashboard',
    loadChildren: () =>
      import('./emp-dashboard/emp-dashboard.component.module').then(
        (m) => m.EmpDashboardModule
      ),
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('./create-user/create-user.module').then(
        (m) => m.CreateUserModule),
  },
  {
    path: 'employee-list',
    loadChildren: () =>
      import('./employee-list/employee-list.module').then(
        (m) => m.EmployeeListModule),
  }
];

const modules = [
  CreateUserModule,
  EmployeeListModule,
  CommonModule,
  EmpDashboardModule
];

@NgModule({
  declarations: [],
  imports: [
    modules, RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule],
})
export class PagesModule { }
