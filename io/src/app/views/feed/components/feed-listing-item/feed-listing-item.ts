import { Listing } from '@/app/models';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feed-listing-item',
  templateUrl: 'feed-listing-item.html',
  styleUrls: ['feed-listing-item.scss']
})
export class FeedListingItemComponent {
  @Input() listing: Listing;

  @Output() listingClicked: EventEmitter<any> = new EventEmitter();

  listingWasClicked(listing): void {
    this.listingClicked.emit([listing]);
  }
}
