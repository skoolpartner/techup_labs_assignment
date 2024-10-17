import { NgModule } from '@angular/core';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CommonModuleModule } from '../common-module/common-module.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSelectModule } from 'ngx-select-ex';


@NgModule({
  declarations: [AddCustomersComponent],
  imports: [
    CommonModuleModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxSelectModule,
  ]
})
export class CustomersModule { }
