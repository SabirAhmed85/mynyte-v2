import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { EventListing, Listing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';

@Component({
  selector: 'app-listing-book-table',
  templateUrl: 'listing-book-table.page.html',
  styleUrls: ['listing-book-table.page.scss'],
})
export class ListingBookTablePage implements OnInit, OnDestroy {
  public restaurantSettings$: Observable<Listing['restaurantSettings']>;
  public restaurantSettings = {} as Listing['restaurantSettings'];
  public backPage: string;

  private ngUnsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonProvider
  ) {
    this.backPage = this.router.url.split('/').pop();
  }

  ngOnInit() {
    this.common.loadingPresent('Loading Events...').then(() => {
      this.restaurantSettings$ = this.route.data.pipe(
        switchMap(
          (data) =>
            data.restaurantSettings$ as Observable<Listing['restaurantSettings']>
        )
      );
      this.restaurantSettings$
        .pipe(take(1))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((restaurantSettings) => {
          this.restaurantSettings = restaurantSettings[0];
          console.log(restaurantSettings[0]);
          this.common.loadingDismiss();
        });
    });
  }

  goToEvent(event: EventListing) {
    this.router.navigate([`feed/event/${event.listingId}`]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
