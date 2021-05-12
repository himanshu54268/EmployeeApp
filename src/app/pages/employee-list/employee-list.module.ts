import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { EmployeeListComponent } from './employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

const imports = [
  CommonModule,
  ButtonModule,
  FormsModule,
  AccordionModule,
  TableModule,
  CheckboxModule,
  ConfirmDialogModule,
  DropdownModule
]

const components = [
  EmployeeListComponent
];
const routes: Routes = [
{
  path: 'employee-list',
  component: EmployeeListComponent
}
];

@NgModule({
  declarations: [components],
  imports: [
    imports,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ], 
})
export class EmployeeListModule { }
