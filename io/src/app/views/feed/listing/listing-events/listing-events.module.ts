import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingEventsPage } from './listing-events.page';
import { ListingEventsPageRoutingModule } from './listing-events-routing.module';
import { FeedListingItemModule } from '@app/views/feed/components/feed-listing-item/feed-listing-item.module';
import { ListingItemBottomBarModule } from '@app/components/listing-item-bottom-bar/listing-item-bottom-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingEventsPageRoutingModule,
    ListingItemBottomBarModule,
    FeedListingItemModule,
  ],
  declarations: [
    ListingEventsPage,
  ]
})
export class ListingEventsPageModule {}
