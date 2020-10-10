import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OfferListing } from '@models/';

@Component({
  selector: 'app-ion-small-button',
  templateUrl: 'ion-small-button.html',
  styleUrls: ['ion-small-button.scss']
})
export class IonSmallButtonComponent {
  @Input() item: OfferListing;

  @Input() icon: string;

  @Input() classNames?: string;

  @Input() text?: string;

  @Input() alignment?: 'left' | 'right';

  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();

  public buttonWasClicked(event: Event) {
    event.stopPropagation();
    this.buttonClicked.emit();
  }
}
