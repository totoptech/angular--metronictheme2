import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectBoxComponent } from './product-select-box.component';

describe('ProductSelectBoxComponent', () => {
  let component: ProductSelectBoxComponent;
  let fixture: ComponentFixture<ProductSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
