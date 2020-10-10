import { Component, Input, OnInit } from '@angular/core';

import { Offer } from '../../services/restaurant-service/node_modules/@models/';
import { ListingService } from '@services/index';

@Component({
  selector: 'app-listing-item-bottom-bar',
  templateUrl: 'listing-item-bottom-bar.html',
  styleUrls: ['listing-item-bottom-bar.scss']
})
export class ListingItemBottomBarComponent implements OnInit {
  @Input() item: Offer;

  @Input() itemType: string;

  public showLikeOrWatch = 'like';
  public showSend = false;
  public itemsToWatch = ['Offer', 'Movie', 'Event'];

  private completeListingAction = {
    like: () => {
      this.listingService.toggleLikeListing().then((result) => {
        console.log(result);
      });
    },
    watch: () => {
      this.listingService.toggleWatchListing().then((result) => {
        console.log(result);
      });
    },
    share: () => {
      console.log('Share');
    },
    send: () => {
      this.listingService.sendListing().then((result) => {
        console.log(result);
      });
    }
  };

  constructor(public listingService: ListingService) {}

  ngOnInit() {
    this.showLikeOrWatch = (this.itemsToWatch.includes(this.itemType)) ? 'watch' : this.showLikeOrWatch;
  }

  public listingAction(event: Event, action: string) {
    event.stopPropagation();
    this.completeListingAction[action]();
  }
}
