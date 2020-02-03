import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsRightComponent } from './product-details-right.component';

describe('ProductDetailsRightComponent', () => {
  let component: ProductDetailsRightComponent;
  let fixture: ComponentFixture<ProductDetailsRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
