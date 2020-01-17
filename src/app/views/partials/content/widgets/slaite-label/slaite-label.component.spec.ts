import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiteLabelComponent } from './slaite-label.component';

describe('SlaiteLabelComponent', () => {
  let component: SlaiteLabelComponent;
  let fixture: ComponentFixture<SlaiteLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiteLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiteLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
