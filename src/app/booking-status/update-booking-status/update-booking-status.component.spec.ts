import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingStatusComponent } from './update-booking-status.component';

describe('UpdateBookingStatusComponent', () => {
  let component: UpdateBookingStatusComponent;
  let fixture: ComponentFixture<UpdateBookingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
