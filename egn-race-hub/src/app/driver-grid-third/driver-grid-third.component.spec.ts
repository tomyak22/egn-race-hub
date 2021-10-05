import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverGridThirdComponent } from './driver-grid-third.component';

describe('DriverGridThirdComponent', () => {
  let component: DriverGridThirdComponent;
  let fixture: ComponentFixture<DriverGridThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverGridThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverGridThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
