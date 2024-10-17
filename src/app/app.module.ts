// import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PinModule } from './pin/pin.module';
import { HttpClientModule } from '@angular/common/http';

// import components
import { AppComponent } from './app.component';

// services 
import { CountryService } from './services/country.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedService} from './services/shared-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    CountryService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
