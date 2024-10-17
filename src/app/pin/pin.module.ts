import { NgModule } from '@angular/core';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinLandingComponent } from './pin-landing/pin-landing.component';
import { AddPinComponent } from './add-pin/add-pin.component';
import { CommonModuleModule } from '../common-module/common-module.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';
import { AddCustomersComponent } from '../customers/add-customers/add-customers.component';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name'
};

@NgModule({
  declarations: [
    PinListComponent, 
    PinLandingComponent,     
    AddPinComponent,
    AddCustomersComponent
  ],
  imports: [    
    CommonModuleModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    FileUploadModule
    
  ],
  exports:[
    PinLandingComponent, 
  ],
  providers:[],
})
export class PinModule { }
