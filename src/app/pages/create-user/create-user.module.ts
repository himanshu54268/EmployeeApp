import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { RouterModule, Routes } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';

const imports = [
  CommonModule,
  ButtonModule,
  FormsModule,
  AccordionModule,
  CheckboxModule,
  ConfirmDialogModule,
  CardModule,
  InputTextModule,
  RadioButtonModule,
  CalendarModule,
  DropdownModule,
  ToastModule
]

const components = [
  CreateUserComponent
];
const routes: Routes = [
{
  path: 'create-user',
  component: CreateUserComponent
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
export class CreateUserModule { }
