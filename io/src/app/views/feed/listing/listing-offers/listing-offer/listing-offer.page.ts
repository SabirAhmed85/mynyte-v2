import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { OfferListing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-listing-offer',
  templateUrl: 'listing-offer.page.html',
  styleUrls: ['listing-offer.page.scss']
})
export class ListingOfferPage implements OnInit {
  public offer$: Observable<OfferListing>;
  public offer = {} as OfferListing;
  public backPage: string;

  constructor(
    private route: ActivatedRoute,
    private common: CommonProvider,
    private router: Router) {
    this.backPage = this.router.url.split('/').pop();
  }

  ngOnInit() {
    this.common.loadingPresent('Loading Offer...').then(() => {
      this.offer$ = this.route.data.pipe(switchMap((data) => data.listingOffer$ as Observable<OfferListing>));
      this.offer$.pipe(take(1)).subscribe((offer) => {
        this.offer = offer;
        this.common.loadingDismiss();
      });
    });
  }
}
