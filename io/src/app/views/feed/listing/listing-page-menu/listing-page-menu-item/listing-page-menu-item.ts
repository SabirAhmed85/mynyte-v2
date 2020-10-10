import { Listing } from '@/app/models';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listing-page-menu-item',
  templateUrl: 'listing-page-menu-item.html',
  styleUrls: ['listing-page-menu-item.scss']
})
export class ListingPageMenuItemComponent {
  @Input() listing: Listing;

  @Input() icon: string;

  @Input() labelText: string;

  @Input() noteText: string;

  @Input() showCounter: boolean;

  @Input() counter: number;

  @Input() showRightChevron: boolean;

  @Input() disabled: boolean;

  @Output() menuItemClicked: EventEmitter<any> = new EventEmitter();

  menuItemWasClicked(item): void {
    this.menuItemClicked.emit([item]);
  }
}
