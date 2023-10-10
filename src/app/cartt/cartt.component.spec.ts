import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttComponent } from './cartt.component';

describe('CarttComponent', () => {
  let component: CarttComponent;
  let fixture: ComponentFixture<CarttComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarttComponent]
    });
    fixture = TestBed.createComponent(CarttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
