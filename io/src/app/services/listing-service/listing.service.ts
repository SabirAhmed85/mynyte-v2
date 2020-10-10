import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Listing } from '@models/';
import { listings } from '@app/constants/listings-data';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  public listings$: BehaviorSubject<Listing[]> = new BehaviorSubject<Listing[]>(listings);

  public async toggleLikeListing() {
    console.log('hi');
    return 'Hi';
  }

  public async toggleWatchListing() {
    console.log('watch');
    return 'Watch';
  }

  public async sendListing() {
    console.log('send');
    return 'Send';
  }

  public getListings(): BehaviorSubject<Listing[]> {
    return this.listings$;
  }

  public getListingsBySearch(searchString: string): Observable<Listing[]> {
    return (searchString === '') ?
      of(null) :
      this.listings$.pipe(map(results => results.filter(listing => listing.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1)));
  }

  public getOpenListings(): Observable<Listing[]> {
    return this.listings$.pipe(map(results => results.filter(listing => listing.listingId === 3 || listing.listingId === 4)));
  }

  public getListing(listingId: number, listingType: string): Observable<Listing> {
    return this.listings$
      .pipe(
        map(results => results.filter(listing =>
          listing.listingId === listingId && listing.listingType === listingType)[0]
        )
      );
  }
}
