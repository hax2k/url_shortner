import { TestBed } from '@angular/core/testing';

import { PopupManegerService } from './popup-maneger.service';

describe('PopupManegerService', () => {
  let service: PopupManegerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupManegerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
