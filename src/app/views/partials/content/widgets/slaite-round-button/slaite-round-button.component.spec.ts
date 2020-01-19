import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiteRoundButtonComponent } from './slaite-round-button.component';

describe('SlaiteRoundButtonComponent', () => {
  let component: SlaiteRoundButtonComponent;
  let fixture: ComponentFixture<SlaiteRoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiteRoundButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiteRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
