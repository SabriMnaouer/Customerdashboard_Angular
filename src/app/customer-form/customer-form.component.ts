// customer-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerService.addCustomer(customer).subscribe(
        addedCustomer => {
          // Log the added customer
          console.log('Added Customer:', addedCustomer);

          // Reset the form after adding the customer
          this.customerForm.reset();
        },
        error => {
          // Handle error if needed
          console.error('Error adding customer:', error);
        }
      );
    }
  }
}
