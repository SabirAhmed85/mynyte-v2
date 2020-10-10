import { Listing } from '@/app/models';
import { ListingService } from '@/app/services';
import { FeedHeaderSearchEventService } from '@/app/services/feed-header-search-event-service/feed-header-search-event-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-panel-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss']
})
export class SearchPanelSearchComponent implements OnInit, OnDestroy {
  public searchString: string;
  public searchListings = null as Listing[];
  public loading = false;

  private ngUnsubscribe = new Subject();

  constructor(
    private listingService: ListingService,
    private feedHeaderSearchEventService: FeedHeaderSearchEventService
  ) { }

  ngOnInit() {
    this.feedHeaderSearchEventService
      .searchString()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(searchString$ => {
      this.searchString = searchString$;
      if (searchString$) {
        this.loading = true;
        this.listingService
          .getListingsBySearch(searchString$)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe((searchListings) => {
          console.log(searchListings);
          this.searchListings = searchListings;
          this.loading = false;
        });
      }
      else {
        this.searchListings = null;
      }
    });

    this.feedHeaderSearchEventService.showSearchScreen().subscribe(show$ => {
      if (!show$) {
        this.searchListings = null;
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
