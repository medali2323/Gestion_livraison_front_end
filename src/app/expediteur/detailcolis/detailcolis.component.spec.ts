import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcolisComponent } from './detailcolis.component';

describe('DetailcolisComponent', () => {
  let component: DetailcolisComponent;
  let fixture: ComponentFixture<DetailcolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcolisComponent]
    });
    fixture = TestBed.createComponent(DetailcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
