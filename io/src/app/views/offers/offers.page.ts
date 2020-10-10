import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { OfferListing } from '@models/';
import { CommonProvider } from '@providers/common-provider';

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.page.html',
  styleUrls: ['offers.page.scss']
})
export class OffersPage implements OnInit {
  public offers$: Observable<OfferListing[]>;
  public offers: OfferListing[];
  public loading: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonProvider
  ) { }

  ngOnInit() {
    this.common.loadingPresent('Loading Offers...').then(() => {
      this.offers$ = this.route.data.pipe(switchMap((data) => data.offers$ as Observable<OfferListing[]>));
      this.offers$.pipe(take(1)).subscribe((offers) => {
        this.offers = offers;
        this.common.loadingDismiss();
      }, (error) => {
        console.log(error);
      });
    });
  }

  public goToOffer(offer: OfferListing) {
    this.router.navigate([`offers/${offer.listingId}`]);
  }
}
