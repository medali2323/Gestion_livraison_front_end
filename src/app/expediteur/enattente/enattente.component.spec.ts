import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnattenteComponent } from './enattente.component';

describe('EnattenteComponent', () => {
  let component: EnattenteComponent;
  let fixture: ComponentFixture<EnattenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnattenteComponent]
    });
    fixture = TestBed.createComponent(EnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
