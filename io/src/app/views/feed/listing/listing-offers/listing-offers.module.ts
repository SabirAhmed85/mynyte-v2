import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingOffersPage } from './listing-offers.page';
import { ListingOffersPageRoutingModule } from './listing-offers-routing.module';
import { OfferListingItemComponent } from '@components/index';
import { ListingItemBottomBarModule } from '@/app/components/listing-item-bottom-bar/listing-item-bottom-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingOffersPageRoutingModule,
    ListingItemBottomBarModule,
  ],
  declarations: [
    ListingOffersPage,
    OfferListingItemComponent
  ]
})
export class ListingOffersPageModule {}
