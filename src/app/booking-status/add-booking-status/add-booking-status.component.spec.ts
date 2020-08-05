import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingStatusComponent } from './add-booking-status.component';

describe('AddBookingStatusComponent', () => {
  let component: AddBookingStatusComponent;
  let fixture: ComponentFixture<AddBookingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
