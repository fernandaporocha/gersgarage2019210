import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatusListComponent } from './booking-status-list.component';

describe('BookingStatusListComponent', () => {
  let component: BookingStatusListComponent;
  let fixture: ComponentFixture<BookingStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
