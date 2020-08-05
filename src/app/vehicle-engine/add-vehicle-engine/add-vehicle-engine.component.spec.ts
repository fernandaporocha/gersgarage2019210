import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleEngineComponent } from './add-vehicle-engine.component';

describe('AddVehicleEngineComponent', () => {
  let component: AddVehicleEngineComponent;
  let fixture: ComponentFixture<AddVehicleEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
