import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerttcolisComponent } from './imprimerttcolis.component';

describe('ImprimerttcolisComponent', () => {
  let component: ImprimerttcolisComponent;
  let fixture: ComponentFixture<ImprimerttcolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerttcolisComponent]
    });
    fixture = TestBed.createComponent(ImprimerttcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
