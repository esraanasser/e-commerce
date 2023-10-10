import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubCategoriesComponent } from './get-sub-categories.component';

describe('GetSubCategoriesComponent', () => {
  let component: GetSubCategoriesComponent;
  let fixture: ComponentFixture<GetSubCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSubCategoriesComponent]
    });
    fixture = TestBed.createComponent(GetSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
