import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpediteurComponent } from './detail-expediteur.component';

describe('DetailExpediteurComponent', () => {
  let component: DetailExpediteurComponent;
  let fixture: ComponentFixture<DetailExpediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailExpediteurComponent]
    });
    fixture = TestBed.createComponent(DetailExpediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
