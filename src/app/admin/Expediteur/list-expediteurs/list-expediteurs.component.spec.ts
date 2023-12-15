import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpediteursComponent } from './list-expediteurs.component';

describe('ListExpediteursComponent', () => {
  let component: ListExpediteursComponent;
  let fixture: ComponentFixture<ListExpediteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExpediteursComponent]
    });
    fixture = TestBed.createComponent(ListExpediteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
