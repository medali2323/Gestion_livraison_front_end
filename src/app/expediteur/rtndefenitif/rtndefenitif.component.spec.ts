import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtndefenitifComponent } from './rtndefenitif.component';

describe('RtndefenitifComponent', () => {
  let component: RtndefenitifComponent;
  let fixture: ComponentFixture<RtndefenitifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RtndefenitifComponent]
    });
    fixture = TestBed.createComponent(RtndefenitifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
