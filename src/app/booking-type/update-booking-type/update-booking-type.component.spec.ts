import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingTypeComponent } from './update-booking-type.component';

describe('UpdateBookingTypeComponent', () => {
  let component: UpdateBookingTypeComponent;
  let fixture: ComponentFixture<UpdateBookingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
