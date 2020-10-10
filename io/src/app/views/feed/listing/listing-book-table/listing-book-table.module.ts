import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingBookTablePage } from './listing-book-table.page';
import { ListingBookTablePageRoutingModule } from './listing-book-table-routing.module';
import { FeedListingItemModule } from '@app/views/feed/components/feed-listing-item/feed-listing-item.module';
import { ListingItemBottomBarModule } from '@app/components/listing-item-bottom-bar/listing-item-bottom-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingBookTablePageRoutingModule,
    ListingItemBottomBarModule,
    FeedListingItemModule,
  ],
  declarations: [
    ListingBookTablePage,
  ]
})
export class ListingBookTablePageModule {}
