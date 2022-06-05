import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllurlsComponent } from './allurls.component';

describe('AllurlsComponent', () => {
  let component: AllurlsComponent;
  let fixture: ComponentFixture<AllurlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllurlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllurlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
