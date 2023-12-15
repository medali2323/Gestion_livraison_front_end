import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecolisComponent } from './onecolis.component';

describe('OnecolisComponent', () => {
  let component: OnecolisComponent;
  let fixture: ComponentFixture<OnecolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnecolisComponent]
    });
    fixture = TestBed.createComponent(OnecolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
