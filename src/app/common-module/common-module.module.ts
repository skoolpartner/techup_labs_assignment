import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPinComponent } from '../pin/add-pin/add-pin.component';
import { AddCustomersComponent } from '../customers/add-customers/add-customers.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
  ],
  
  entryComponents:[
    AddPinComponent,
    AddCustomersComponent
  ],
})
export class CommonModuleModule { }
