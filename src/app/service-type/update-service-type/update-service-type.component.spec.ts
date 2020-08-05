import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceTypeComponent } from './update-service-type.component';

describe('UpdateServiceTypeComponent', () => {
  let component: UpdateServiceTypeComponent;
  let fixture: ComponentFixture<UpdateServiceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateServiceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
