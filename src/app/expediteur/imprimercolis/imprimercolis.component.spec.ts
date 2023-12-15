import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimercolisComponent } from './imprimercolis.component';

describe('ImprimercolisComponent', () => {
  let component: ImprimercolisComponent;
  let fixture: ComponentFixture<ImprimercolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimercolisComponent]
    });
    fixture = TestBed.createComponent(ImprimercolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
