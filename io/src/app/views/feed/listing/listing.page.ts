import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { Listing } from '@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-listing',
  templateUrl: 'listing.page.html',
  styleUrls: ['listing.page.scss']
})
export class ListingPage implements OnInit, OnDestroy {
  public listing$: Observable<Listing>;
  public listing = {} as Listing;

  private ngUnsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private common: CommonProvider
  ) {}

  ngOnInit() {
    this.common.loadingPresent('Loading Listing...').then(() => {
      this.listing$ = this.route.data.pipe(switchMap((data) => data.listing$ as Observable<Listing>));
      this.listing$
        .pipe(take(1))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((listing) => {
        this.listing = listing;
        this.common.loadingDismiss();
      });
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
