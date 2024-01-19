import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {
    this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      contactNumber: [data.contactNumber, Validators.required]
    });
  }

  onSaveClick(): void {
    if (this.editForm.valid) {
      const editedCustomer: Customer = { ...this.data, ...this.editForm.value };
      this.dialogRef.close(editedCustomer);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
