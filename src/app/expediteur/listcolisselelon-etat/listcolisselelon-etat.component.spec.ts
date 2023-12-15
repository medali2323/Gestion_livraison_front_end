import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcolisselelonEtatComponent } from './listcolisselelon-etat.component';

describe('ListcolisselelonEtatComponent', () => {
  let component: ListcolisselelonEtatComponent;
  let fixture: ComponentFixture<ListcolisselelonEtatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcolisselelonEtatComponent]
    });
    fixture = TestBed.createComponent(ListcolisselelonEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
