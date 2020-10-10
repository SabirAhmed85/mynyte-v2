import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListingItemComponent } from './offer-listing-item';

describe('TabsPage', () => {
  let component: OfferListingItemComponent;
  let fixture: ComponentFixture<OfferListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferListingItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
