import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ListingService } from '@services/index';
import { Listing } from '@models/';

@Injectable({
  providedIn: 'root'
})
export class FeedSearchResolverService implements Resolve<Observable<Listing[]>> {

  constructor(private listingService: ListingService) { }

  resolve(): Observable<Observable<Listing[]>> {
    return of(this.listingService.getListings());
  }
}
