import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordExpediteurComponent } from './dashbord-expediteur.component';

describe('DashbordExpediteurComponent', () => {
  let component: DashbordExpediteurComponent;
  let fixture: ComponentFixture<DashbordExpediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordExpediteurComponent]
    });
    fixture = TestBed.createComponent(DashbordExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
