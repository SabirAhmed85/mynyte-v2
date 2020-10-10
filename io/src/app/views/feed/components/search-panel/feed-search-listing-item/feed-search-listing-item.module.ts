import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedSearchListingItemComponent } from './feed-search-listing-item';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [FeedSearchListingItemComponent],
  exports: [FeedSearchListingItemComponent]
})
export class FeedSearchListingItemModule {}
