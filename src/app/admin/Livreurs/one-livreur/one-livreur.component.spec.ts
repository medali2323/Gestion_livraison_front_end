import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLivreurComponent } from './one-livreur.component';

describe('OneLivreurComponent', () => {
  let component: OneLivreurComponent;
  let fixture: ComponentFixture<OneLivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneLivreurComponent]
    });
    fixture = TestBed.createComponent(OneLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
