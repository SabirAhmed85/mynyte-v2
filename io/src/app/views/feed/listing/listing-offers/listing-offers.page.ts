import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { OfferListing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-listing-offers',
  templateUrl: 'listing-offers.page.html',
  styleUrls: ['listing-offers.page.scss']
})
export class ListingOffersPage implements OnInit, OnDestroy {
  public listingOffers$: Observable<OfferListing[]>;
  public listingOffers: OfferListing[];
  public backPage: string;

  private ngUnsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonProvider
  ) {
    this.backPage = this.router.url.replace('/offers', '');
  }

  ngOnInit() {
    this.common.loadingPresent('Loading Offers...').then(() => {
      this.listingOffers$ = this.route.data.pipe(switchMap((data) => data.listingOffers$ as Observable<OfferListing[]>));
      this.listingOffers$
        .pipe(take(1))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((listingOffers) => {
        this.listingOffers = listingOffers;
        this.common.loadingDismiss();
      });
    });
  }

  goToOffer(offer: OfferListing) {
    this.router.navigate([`${this.router.url}/${offer.listingId}`]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
