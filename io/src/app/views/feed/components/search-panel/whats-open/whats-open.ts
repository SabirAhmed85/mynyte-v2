import { Listing } from '@/app/models';
import { ListingService } from '@/app/services';
import { FeedHeaderSearchEventService } from '@/app/services/feed-header-search-event-service/feed-header-search-event-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-panel-whats-open',
  templateUrl: 'whats-open.html',
  styleUrls: ['whats-open.scss']
})
export class SearchPanelWhatsOpenComponent implements OnInit, OnDestroy {
  public openListings = null as Listing[];
  public loading = false;

  private ngUnsubscribe = new Subject();

  constructor(
    private listingService: ListingService,
    private feedHeaderSearchEventService: FeedHeaderSearchEventService
  ) {}

  ngOnInit() {
    this.feedHeaderSearchEventService
      .showWhatsOpenScreen()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(show$ => {
      if (!!show$) {
        this.loading = true;
        this.listingService
        .getOpenListings()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((openListings) => {
          console.log(openListings);
          this.openListings = openListings;
          this.loading = false;
        });
      }
      else {
        this.openListings = [];
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
