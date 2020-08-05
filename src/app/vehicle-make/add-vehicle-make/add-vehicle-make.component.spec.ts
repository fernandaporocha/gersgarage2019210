import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleMakeComponent } from './add-vehicle-make.component';

describe('AddVehicleMakeComponent', () => {
  let component: AddVehicleMakeComponent;
  let fixture: ComponentFixture<AddVehicleMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
