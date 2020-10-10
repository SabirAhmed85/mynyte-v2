import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPanelWhatsOpenComponent } from './whats-open';
import { FeedSearchListingItemModule } from '../feed-search-listing-item/feed-search-listing-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FeedSearchListingItemModule,
  ],
  declarations: [SearchPanelWhatsOpenComponent],
  exports: [SearchPanelWhatsOpenComponent]
})
export class SearchPanelWhatsOpenModule {}
