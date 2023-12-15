import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercolisComponent } from './modifiercolis.component';

describe('ModifiercolisComponent', () => {
  let component: ModifiercolisComponent;
  let fixture: ComponentFixture<ModifiercolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiercolisComponent]
    });
    fixture = TestBed.createComponent(ModifiercolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
