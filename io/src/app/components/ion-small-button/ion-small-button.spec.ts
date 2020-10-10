import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSmallButtonComponent } from './ion-small-button';

describe('IonSmallButtonComponent', () => {
  let component: IonSmallButtonComponent;
  let fixture: ComponentFixture<IonSmallButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IonSmallButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSmallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
