import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferListingItemComponent } from './offer-listing-item';
import { ListingItemBottomBarModule } from '../listing-item-bottom-bar/listing-item-bottom-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingItemBottomBarModule,
  ],
  declarations: [
    OfferListingItemComponent,
  ],
  exports: [OfferListingItemComponent]
})
export class OfferListingItemModule {}
