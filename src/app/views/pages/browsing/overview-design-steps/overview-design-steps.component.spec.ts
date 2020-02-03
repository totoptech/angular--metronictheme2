import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDesignStepsComponent } from './overview-design-steps.component';

describe('OverviewDesignStepsComponent', () => {
  let component: OverviewDesignStepsComponent;
  let fixture: ComponentFixture<OverviewDesignStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDesignStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDesignStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
