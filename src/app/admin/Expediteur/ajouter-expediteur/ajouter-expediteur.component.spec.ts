import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterExpediteurComponent } from './ajouter-expediteur.component';

describe('AjouterExpediteurComponent', () => {
  let component: AjouterExpediteurComponent;
  let fixture: ComponentFixture<AjouterExpediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterExpediteurComponent]
    });
    fixture = TestBed.createComponent(AjouterExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
