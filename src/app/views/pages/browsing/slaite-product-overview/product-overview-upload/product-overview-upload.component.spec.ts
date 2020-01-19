import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewUploadComponent } from './product-overview-upload.component';

describe('ProductOverviewUploadComponent', () => {
  let component: ProductOverviewUploadComponent;
  let fixture: ComponentFixture<ProductOverviewUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOverviewUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
