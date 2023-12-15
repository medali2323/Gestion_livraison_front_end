import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDepotComponent } from './ajouter-depot.component';

describe('AjouterDepotComponent', () => {
  let component: AjouterDepotComponent;
  let fixture: ComponentFixture<AjouterDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDepotComponent]
    });
    fixture = TestBed.createComponent(AjouterDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
