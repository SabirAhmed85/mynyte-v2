import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingOffersPage } from './listing-offers.page';

describe('ListingOffersPage', () => {
  let component: ListingOffersPage;
  let fixture: ComponentFixture<ListingOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingOffersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
