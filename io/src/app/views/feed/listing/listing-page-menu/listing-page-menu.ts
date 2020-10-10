import { Listing } from '@/app/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page-menu',
  templateUrl: 'listing-page-menu.html',
  styleUrls: ['listing-page-menu.scss']
})
export class ListingPageMenuComponent implements OnInit {
  @Input() listing: Listing;

  @Output() listingClicked: EventEmitter<any> = new EventEmitter();

  public url: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.router.url;
    console.log(this.url);
  }

  listingWasClicked(listing): void {
    this.listingClicked.emit([listing]);
  }

  goToListingItems(items: string) {
    console.log('go');

    if (items === 'offers' && this.listing.totalOffers > 0) {
      this.router.navigate([`${this.url}/${items}`]);
    }
    else if (items === 'events' && this.listing.totalEvents > 0) {
      this.router.navigate([`${this.url}/${items}`]);
    }
    else if (items === 'book-table' && this.listing.restaurantSettings.acceptingTableBookings) {
      this.router.navigate([`${this.url}/${items}`]);
    }
    else if (items !== 'book-table' && items !== 'events' && items !== 'offers') {
      this.router.navigate([`${this.url}/${items}`]);
    }
  }
}
