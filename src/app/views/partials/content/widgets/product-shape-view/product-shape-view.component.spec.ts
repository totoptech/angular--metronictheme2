import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShapeViewComponent } from './product-shape-view.component';

describe('ProductShapeViewComponent', () => {
  let component: ProductShapeViewComponent;
  let fixture: ComponentFixture<ProductShapeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShapeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShapeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
