import { ShortUrl } from './../../../../Models/shortUrl';
import { Services } from './../../../../Services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { config } from 'src/app/Utils/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  form: FormGroup;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  shortUrl: ShortUrl;
  tinyUrl: string;

  constructor(private formbuilder: FormBuilder, private $: Services) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      url: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.reg)]]
    });
    this.shortUrl = new ShortUrl();
  }

  generateUrl() {
    this.$.apis.url.postShortUrl(this.form.value).subscribe({
      next: (x) => {
        this.shortUrl = x;
        this.tinyUrl = x.shortUrl;
        this.$.snackBar.open(`Actor Added!`, "", config);
      },
      error: (err: HttpErrorResponse) => {
        this.$.snackBar.open(`${err.message}`, "", config);
      }
    });

  }
  getErrorMessageFieldName(prop: string) {

    const field = this.form.get(prop) as any;

    if (field.hasError('required')) {
      return `The ${prop} field is required`;
    }

    if (field.hasError('minlength')) {
      return 'The minimum length is 3';
    }

    if (field.hasError('pattern')) {
      return 'Please enter valid URL';
    }

    return '';

  }
}
