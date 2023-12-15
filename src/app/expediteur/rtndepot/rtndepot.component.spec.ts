import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtndepotComponent } from './rtndepot.component';

describe('RtndepotComponent', () => {
  let component: RtndepotComponent;
  let fixture: ComponentFixture<RtndepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtndepotComponent]
    });
    fixture = TestBed.createComponent(RtndepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
