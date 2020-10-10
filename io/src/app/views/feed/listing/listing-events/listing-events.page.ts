import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { EventListing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-listing-events',
  templateUrl: 'listing-events.page.html',
  styleUrls: ['listing-events.page.scss']
})
export class ListingEventsPage implements OnInit, OnDestroy {
  public listingEvents$: Observable<EventListing[]>;
  public listingEvents: EventListing[];
  public backPage: string;

  private ngUnsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: CommonProvider
  ) {
    this.backPage = this.router.url.replace('/events', '');
  }

  ngOnInit() {
    this.common.loadingPresent('Loading Events...').then(() => {
      this.listingEvents$ = this.route.data.pipe(switchMap((data) => data.listingEvents$ as Observable<EventListing[]>));
      this.listingEvents$
        .pipe(take(1))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((listingEvents) => {
        this.listingEvents = listingEvents;
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
