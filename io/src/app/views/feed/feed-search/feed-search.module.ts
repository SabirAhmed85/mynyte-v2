import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedSearchPage } from './feed-search.page';

import { FeedPageRoutingModule } from './feed-search-routing.module';
import { FeedListingItemModule } from '../components/feed-listing-item/feed-listing-item.module';
import { FeedMainSearchModule } from '../components/feed-main-search/feed-main-search.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedPageRoutingModule,
    FeedListingItemModule,
    FeedMainSearchModule,
  ],
  declarations: [FeedSearchPage]
})
export class FeedSearchPageModule {}
