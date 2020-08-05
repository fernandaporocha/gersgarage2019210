import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleMakeComponent } from './update-vehicle-make.component';

describe('UpdateVehicleMakeComponent', () => {
  let component: UpdateVehicleMakeComponent;
  let fixture: ComponentFixture<UpdateVehicleMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehicleMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
