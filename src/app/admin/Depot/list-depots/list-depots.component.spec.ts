import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepotsComponent } from './list-depots.component';

describe('ListDepotsComponent', () => {
  let component: ListDepotsComponent;
  let fixture: ComponentFixture<ListDepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDepotsComponent]
    });
    fixture = TestBed.createComponent(ListDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
