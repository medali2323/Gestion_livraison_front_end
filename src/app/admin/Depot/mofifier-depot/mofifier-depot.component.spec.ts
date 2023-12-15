import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MofifierDepotComponent } from './mofifier-depot.component';

describe('MofifierDepotComponent', () => {
  let component: MofifierDepotComponent;
  let fixture: ComponentFixture<MofifierDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MofifierDepotComponent]
    });
    fixture = TestBed.createComponent(MofifierDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
