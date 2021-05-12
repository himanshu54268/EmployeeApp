import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule} from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { EmpDashboardComponent } from './emp-dashboard.component';

const imports = [
    CommonModule,
    ButtonModule,
    FormsModule,
    AccordionModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule
  ]

const components = [
    EmpDashboardComponent
];
const routes: Routes = [
  {
    path: 'emp-dashboard',
    component: EmpDashboardComponent
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
export class EmpDashboardModule { }
