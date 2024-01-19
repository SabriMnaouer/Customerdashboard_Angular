import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';
import { DeleteCustomerDialogComponent } from '../delete-customer-dialog/delete-customer-dialog.component';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  showAddCustomerForm: boolean = false;
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchQuery: string = '';

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.applySearchAndSort();
      this.cdr.detectChanges();
    });
  }

  toggleAddCustomerForm(): void {
    this.showAddCustomerForm = !this.showAddCustomerForm;
  }

  openEditDialog(customer: Customer): void {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width: '400px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updateCustomer(result).subscribe(updateSuccessful => {
          if (updateSuccessful) {
            // Reload the customers only if update was successful
            this.loadCustomers();
          }
        });
      }
    });
  }

  openDeleteDialog(customer: Customer): void {
    const dialogRef = this.dialog.open(DeleteCustomerDialogComponent, {
      width: '300px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(result.id).subscribe(deletionSuccessful => {
          if (deletionSuccessful) {
            // Reload the customers only if deletion was successful
            this.loadCustomers();
          }
        });
      }
    });
  }

  applySearchAndSort(): void {
    // Filter by search query
    this.filteredCustomers = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    // Sort the filtered customers
    if (this.sortField) {
      this.filteredCustomers.sort((a, b) => {
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        return (a as any)[this.sortField].localeCompare((b as any)[this.sortField]) * direction;
      });
    }
  }

  sort(field: string): void {
    if (field === this.sortField) {
      // Reverse the sort direction if clicking on the same field
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the new field and default to ascending order
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.applySearchAndSort();
  }
  
}
