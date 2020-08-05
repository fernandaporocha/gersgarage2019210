import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleModelComponent } from './update-vehicle-model.component';

describe('UpdateVehicleModelComponent', () => {
  let component: UpdateVehicleModelComponent;
  let fixture: ComponentFixture<UpdateVehicleModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehicleModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
