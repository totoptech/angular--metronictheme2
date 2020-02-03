import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiteSearchComponent } from './slaite-search.component';

describe('SlaiteSearchComponent', () => {
  let component: SlaiteSearchComponent;
  let fixture: ComponentFixture<SlaiteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
