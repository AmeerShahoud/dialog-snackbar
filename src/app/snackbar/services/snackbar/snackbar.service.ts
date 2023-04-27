import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarData } from '../../models/snackbar-data';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {}

  open(snackBarData: SnackbarData, snackbarConfig: MatSnackBarConfig = {}) {
    return this.matSnackBar.open(
      snackBarData.text ?? snackBarData.type,
      undefined,
      {
        panelClass: 'snackbar-' + snackBarData.type,
        // duration: 3000,
        ...snackbarConfig,
      }
    );
  }
}
