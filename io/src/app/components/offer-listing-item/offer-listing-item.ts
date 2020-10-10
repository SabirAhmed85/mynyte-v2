import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfferListing } from '@models/';

@Component({
  selector: 'app-offer-listing-item',
  templateUrl: 'offer-listing-item.html',
  styleUrls: ['offer-listing-item.scss']
})
export class OfferListingItemComponent {
  @Input() offer: OfferListing;

  @Output() offerClicked: EventEmitter<any> = new EventEmitter();

  offerWasClicked(offer): void {
    this.offerClicked.emit([offer]);
  }
}
