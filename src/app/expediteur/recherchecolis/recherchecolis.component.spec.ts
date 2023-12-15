import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchecolisComponent } from './recherchecolis.component';

describe('RecherchecolisComponent', () => {
  let component: RecherchecolisComponent;
  let fixture: ComponentFixture<RecherchecolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecherchecolisComponent]
    });
    fixture = TestBed.createComponent(RecherchecolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
