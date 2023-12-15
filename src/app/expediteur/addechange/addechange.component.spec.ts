import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddechangeComponent } from './addechange.component';

describe('AddechangeComponent', () => {
  let component: AddechangeComponent;
  let fixture: ComponentFixture<AddechangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddechangeComponent]
    });
    fixture = TestBed.createComponent(AddechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
