import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersPage } from './offers.page';

import { OffersPageRoutingModule } from './offers-routing.module';
import { OfferListingItemModule } from '@components/offer-listing-item/offer-listing-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    OffersPageRoutingModule,
    OfferListingItemModule,
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
