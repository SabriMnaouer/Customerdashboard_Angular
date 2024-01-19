import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';
import { DeleteCustomerDialogComponent } from './delete-customer-dialog/delete-customer-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    EditCustomerDialogComponent,
    DeleteCustomerDialogComponent,
    LoginComponent,
    SignupComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCollapseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
