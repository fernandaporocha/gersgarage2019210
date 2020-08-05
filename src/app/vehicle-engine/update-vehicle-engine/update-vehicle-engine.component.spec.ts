import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleEngineComponent } from './update-vehicle-engine.component';

describe('UpdateVehicleEngineComponent', () => {
  let component: UpdateVehicleEngineComponent;
  let fixture: ComponentFixture<UpdateVehicleEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehicleEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
