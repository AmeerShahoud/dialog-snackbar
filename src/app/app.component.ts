import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import { DialogService } from './dialog/services/dialog/dialog.service';
import { SnackbarService } from './snackbar/services/snackbar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dialog-snackbar';
  constructor(
    private dialogService: DialogService,
    private snackbarService: SnackbarService
  ) {}

  dialogInfo() {
    this.dialogService.open({
      type: 'info',
      title: 'Info',
      body: 'Info body',
    });
  }
  dialogSuccess() {
    this.dialogService.open({
      type: 'success',
      title: 'success',
      body: 'success body',
    });
  }
  dialogWarn() {
    this.dialogService.open({
      type: 'warn',
      title: 'warn',
      body: 'warn body',
    });
  }
  dialogError() {
    this.dialogService.open({
      type: 'error',
      title: 'error',
      body: 'error body',
    });
  }

  snackbarInfo() {
    this.snackbarService.open({
      type: 'info',
      text: 'Info',
    });
  }
  snackbarSuccess() {
    this.snackbarService.open({
      type: 'success',
      text: 'success',
    });
  }
  snackbarWarn() {
    this.snackbarService.open({
      type: 'warn',
      text: 'warn',
    });
  }
  snackbarError() {
    this.snackbarService.open({
      type: 'error',
      text: 'error',
    });
  }
}
