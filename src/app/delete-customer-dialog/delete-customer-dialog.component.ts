import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-delete-customer-dialog',
  templateUrl: './delete-customer-dialog.component.html',
  styleUrls: ['./delete-customer-dialog.component.css']
})
export class DeleteCustomerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {}

  onDeleteClick(): void {
    this.dialogRef.close(this.data);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
