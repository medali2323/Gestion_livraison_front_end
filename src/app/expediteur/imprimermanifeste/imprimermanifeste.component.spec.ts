import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimermanifesteComponent } from './imprimermanifeste.component';

describe('ImprimermanifesteComponent', () => {
  let component: ImprimermanifesteComponent;
  let fixture: ComponentFixture<ImprimermanifesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimermanifesteComponent]
    });
    fixture = TestBed.createComponent(ImprimermanifesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
