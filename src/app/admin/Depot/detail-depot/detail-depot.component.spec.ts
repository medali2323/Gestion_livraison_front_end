import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepotComponent } from './detail-depot.component';

describe('DetailDepotComponent', () => {
  let component: DetailDepotComponent;
  let fixture: ComponentFixture<DetailDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDepotComponent]
    });
    fixture = TestBed.createComponent(DetailDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
