import { NgModule } from '@angular/core';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CommonModuleModule } from '../common-module/common-module.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};
@NgModule({
  declarations: [AddCustomersComponent],
  imports: [
    CommonModuleModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxSelectModule.forRoot(CustomSelectOptions)
  ]
})
export class CustomersModule { }
