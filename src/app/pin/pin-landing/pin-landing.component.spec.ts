import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinLandingComponent } from './pin-landing.component';

describe('PinLandingComponent', () => {
  let component: PinLandingComponent;
  let fixture: ComponentFixture<PinLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
