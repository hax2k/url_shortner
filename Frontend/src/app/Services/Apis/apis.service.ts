import { UrlService } from './url.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(public url: UrlService) { }
}
