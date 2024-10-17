import { NgModule } from '@angular/core';
import { PinListComponent } from './pin-list/pin-list.component';
import { PinLandingComponent } from './pin-landing/pin-landing.component';
import { AddPinComponent } from './add-pin/add-pin.component';
import { CustomersModule } from '../customers/customers.module';
import { CommonModuleModule } from '../common-module/common-module.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PinListComponent, 
    PinLandingComponent,     
    AddPinComponent,    
  ],
  imports: [    
    CommonModuleModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxSelectModule,
  ],
  exports:[
    PinLandingComponent, 
  ],
  providers:[],
})
export class PinModule { }
