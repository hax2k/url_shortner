import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmpopupComponent } from 'src/app/Utils/Components/confirmpopup/confirmpopup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupManegerService {


  constructor(private popup: MatDialog) { }

  openConfirm(data: any = []) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "300px";
    dialogConfig.data = data;
    let dialogRef: MatDialogRef<ConfirmpopupComponent> = this.popup.open(ConfirmpopupComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}
