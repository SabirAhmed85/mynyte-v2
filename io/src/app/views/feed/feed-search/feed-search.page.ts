import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { Listing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';
import { FeedHeaderSearchEventService } from '@/app/services/feed-header-search-event-service/feed-header-search-event-service.service';

@Component({
  selector: 'app-feed-search',
  templateUrl: 'feed-search.page.html',
  styleUrls: ['feed-search.page.scss']
})
export class FeedSearchPage implements OnInit, OnDestroy {
  public listings$: Observable<Listing[]>;
  public listings: {}[];
  public showSearchScreen = false;
  public showWhatsOpenScreen = false;

  private ngUnsubscribe = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonProvider,
    private feedHeaderSearchEventService: FeedHeaderSearchEventService
  ) { }

  ngOnInit() {
    this.common.loadingPresent('Loading Feed...').then(() => {
      this.feedHeaderSearchEventService
        .showSearchScreen()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(show$ => {
        this.showSearchScreen = show$;
      });

      this.feedHeaderSearchEventService
        .showWhatsOpenScreen()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(show$ => {
        this.showWhatsOpenScreen = show$;
      });

      this.feedHeaderSearchEventService
        .listingClicked()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(listing$ => {
        this.goToListing(listing$);
      });

      this.listings$ = this.route.data.pipe(switchMap((data) => data.listings$ as Observable<Listing[]>));
      this.listings$
        .pipe(take(1), takeUntil(this.ngUnsubscribe))
        .subscribe((listings) => {
        this.listings = listings;
        this.common.loadingDismiss();
      });
    });
  }

  goToListing(listing: Listing): void {
    this.router.navigate([`feed/${listing.listingType}/${listing.listingId}`]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
