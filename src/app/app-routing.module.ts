import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: '', component: HomeComponent, pathMatch: 'full', data: { reuse: true }},
  { path: 'search/:searchItem', component: HomeComponent },
  {path:'login', component:LogInComponent},
  {path:'register', component:RegistrationComponent},
  {path:'cart', component:CartComponent},
  {path:'payment', component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }] 
})
export class AppRoutingModule {}
