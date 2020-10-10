import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedListingItemComponent } from './feed-listing-item';
import { ListingItemBottomBarModule } from '@components/listing-item-bottom-bar/listing-item-bottom-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingItemBottomBarModule,
  ],
  declarations: [FeedListingItemComponent],
  exports: [FeedListingItemComponent]
})
export class FeedListingItemModule {}
