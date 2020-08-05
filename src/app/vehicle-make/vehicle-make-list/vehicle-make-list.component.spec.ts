import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakeListComponent } from './vehicle-make-list.component';

describe('VehicleMakeListComponent', () => {
  let component: VehicleMakeListComponent;
  let fixture: ComponentFixture<VehicleMakeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMakeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
