import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { OfferListing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-offer',
  templateUrl: 'offer.page.html',
  styleUrls: ['offer.page.scss']
})
export class OfferPage implements OnInit {
  public offer$: Observable<OfferListing>;
  public offer = {} as OfferListing;

  constructor(private route: ActivatedRoute, private common: CommonProvider) { }

  ngOnInit() {
    this.common.loadingPresent('Loading Offer...').then(() => {
      this.offer$ = this.route.data.pipe(switchMap((data) => data.offer$ as Observable<OfferListing>));
      this.offer$.pipe(take(1)).subscribe((offer) => {
        this.offer = offer;
        this.common.loadingDismiss();
      });
    });
  }
}
