import { TestBed } from '@angular/core/testing';

import { Services } from './services.service';

describe('ServicesService', () => {
  let service: Services;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
