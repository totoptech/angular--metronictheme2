import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWrapperDefaultComponent } from './product-wrapper-default.component';

describe('ProductWrapperDefaultComponent', () => {
  let component: ProductWrapperDefaultComponent;
  let fixture: ComponentFixture<ProductWrapperDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWrapperDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWrapperDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
