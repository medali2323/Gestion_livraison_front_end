import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudepotComponent } from './audepot.component';

describe('AudepotComponent', () => {
  let component: AudepotComponent;
  let fixture: ComponentFixture<AudepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudepotComponent]
    });
    fixture = TestBed.createComponent(AudepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
