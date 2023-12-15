import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExpediteurComponent } from './one-expediteur.component';

describe('OneExpediteurComponent', () => {
  let component: OneExpediteurComponent;
  let fixture: ComponentFixture<OneExpediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneExpediteurComponent]
    });
    fixture = TestBed.createComponent(OneExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
