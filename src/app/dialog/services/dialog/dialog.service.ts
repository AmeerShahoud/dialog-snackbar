import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog-component/dialog-component.component';
import { DialogData } from '../../models/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}

  open(dialogData: DialogData, dialogConfig: MatDialogConfig = {}) {
    return this.matDialog.open(DialogComponent, {
      width: '50%',
      ...dialogConfig,
      data: dialogData,
    });
  }
}
