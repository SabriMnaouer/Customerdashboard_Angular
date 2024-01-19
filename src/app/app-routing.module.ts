import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerComponent } from './customer/customer.component'; // Import your customer component
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'add-customer', component: CustomerFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/customer', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
