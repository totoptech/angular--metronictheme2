import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiteProductOverviewComponent } from './slaite-product-overview.component';

describe('SlaiteProductOverviewComponent', () => {
  let component: SlaiteProductOverviewComponent;
  let fixture: ComponentFixture<SlaiteProductOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiteProductOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiteProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
