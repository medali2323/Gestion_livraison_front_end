import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolisComponent } from './addcolis.component';

describe('AddcolisComponent', () => {
  let component: AddcolisComponent;
  let fixture: ComponentFixture<AddcolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcolisComponent]
    });
    fixture = TestBed.createComponent(AddcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
