import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDepotComponent } from './one-depot.component';

describe('OneDepotComponent', () => {
  let component: OneDepotComponent;
  let fixture: ComponentFixture<OneDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneDepotComponent]
    });
    fixture = TestBed.createComponent(OneDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
