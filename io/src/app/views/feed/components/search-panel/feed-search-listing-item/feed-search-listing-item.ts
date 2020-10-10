import { Listing } from '@/app/models';
import { FeedHeaderSearchEventService } from '@/app/services/feed-header-search-event-service/feed-header-search-event-service.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feed-search-listing-item',
  templateUrl: 'feed-search-listing-item.html',
  styleUrls: ['feed-search-listing-item.scss']
})
export class FeedSearchListingItemComponent {
  @Input() listing: {};

  constructor(private feedHeaderSearchEventService: FeedHeaderSearchEventService) {}

  listingClicked(listing: Listing): void {
    this.feedHeaderSearchEventService.listingClicked().next(listing);
  }
}
