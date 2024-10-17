import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinLandingComponent } from './pin/pin-landing/pin-landing.component';

const routes: Routes = [
  {path:'', redirectTo:'list-pin', pathMatch:'full'},
  {path:'list-pin', component: PinLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
