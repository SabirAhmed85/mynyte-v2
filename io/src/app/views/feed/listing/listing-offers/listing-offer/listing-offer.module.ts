import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingOfferPage } from './listing-offer.page';

import { ListingOfferPageRoutingModule } from './listing-offer-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingOfferPageRoutingModule,
  ],
  declarations: [ListingOfferPage]
})
export class ListingOfferPageModule {}
