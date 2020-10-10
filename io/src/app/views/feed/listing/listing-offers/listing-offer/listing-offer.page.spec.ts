import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListingOfferPage } from './listing-offer.page';

describe('ListingOfferPage', () => {
  let component: ListingOfferPage;
  let fixture: ComponentFixture<ListingOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListingOfferPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
