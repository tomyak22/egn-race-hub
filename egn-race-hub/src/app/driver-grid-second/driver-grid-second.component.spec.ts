import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverGridSecondComponent } from './driver-grid-second.component';

describe('DriverGridSecondComponent', () => {
  let component: DriverGridSecondComponent;
  let fixture: ComponentFixture<DriverGridSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverGridSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverGridSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
