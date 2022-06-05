import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from './Apis/apis.service';
import { PopupManegerService } from './Helpers/popup-maneger.service';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(
    public router: Router,
    public apis: ApisService,
    public model: PopupManegerService,
    public snackBar: MatSnackBar,
  ) { }
}
