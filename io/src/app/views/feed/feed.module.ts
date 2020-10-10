import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedPage } from './feed.page';

import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedListingItemModule } from './components/feed-listing-item/feed-listing-item.module';
import { FeedSearchListingItemModule } from './components/search-panel/feed-search-listing-item/feed-search-listing-item.module';
import { FeedHeaderModule } from './components/feed-header/feed-header.module';
import { SearchPanelSearchModule } from './components/search-panel/search/search.module';
import { SearchPanelWhatsOpenModule } from './components/search-panel/whats-open/whats-open.module';
import { FeedMainSearchModule } from './components/feed-main-search/feed-main-search.module';
import { ExpandableModule } from '@app/components/expandable/expandable.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedPageRoutingModule,
    FeedListingItemModule,
    FeedSearchListingItemModule,
    FeedHeaderModule,
    FeedMainSearchModule,
    SearchPanelSearchModule,
    SearchPanelWhatsOpenModule,
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
