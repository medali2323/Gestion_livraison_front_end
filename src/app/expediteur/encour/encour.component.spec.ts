import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncourComponent } from './encour.component';

describe('EncourComponent', () => {
  let component: EncourComponent;
  let fixture: ComponentFixture<EncourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncourComponent]
    });
    fixture = TestBed.createComponent(EncourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
