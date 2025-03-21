import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeDetailsComponent } from '../admin/employee/employee-details/employee-details.component';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  showSnackbar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000, // Auto close after 3 seconds
      horizontalPosition: 'center', // Start, center, end
      verticalPosition: 'bottom', // Top, bottom
      panelClass: ['custom-snackbar'], // Optional custom styling
    });
  }

  openDialog(disableClose: boolean = false) {
    return this.dialog.open(EmployeeDetailsComponent, {
      width: '400px',
      disableClose, // Prevent closing on outside click
    });
  }
}
