import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPanelSearchComponent } from './search';
import { FeedSearchListingItemModule } from '../feed-search-listing-item/feed-search-listing-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FeedSearchListingItemModule,
  ],
  declarations: [SearchPanelSearchComponent],
  exports: [SearchPanelSearchComponent]
})
export class SearchPanelSearchModule {}
