import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Diallog } from 'src/app/Models/util-interfaces';

@Component({
  selector: 'app-confirmpopup',
  templateUrl: './confirmpopup.component.html',
  styleUrls: ['./confirmpopup.component.scss']
})
export class ConfirmpopupComponent implements OnInit {

  title: string;
  message: string;

  constructor(private matdialogref: MatDialogRef<ConfirmpopupComponent>, @Inject(MAT_DIALOG_DATA) _diallogdata: Diallog) {
    this.title = _diallogdata.title;
    this.message = _diallogdata.message;
  }

  ngOnInit(): void {
  }
  onConfirm(): void {
    this.matdialogref.close(true);
  }

  onDismiss(): void {
    this.matdialogref.close(false);
  }
}
