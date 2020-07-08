import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEngineListComponent } from './vehicle-engine-list.component';

describe('VehicleEngineListComponent', () => {
  let component: VehicleEngineListComponent;
  let fixture: ComponentFixture<VehicleEngineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleEngineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
