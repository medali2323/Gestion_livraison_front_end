import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierExpediteurComponent } from './modifier-expediteur.component';

describe('ModifierExpediteurComponent', () => {
  let component: ModifierExpediteurComponent;
  let fixture: ComponentFixture<ModifierExpediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierExpediteurComponent]
    });
    fixture = TestBed.createComponent(ModifierExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
