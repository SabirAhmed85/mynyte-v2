import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ListingService } from '@services/index';
import { Listing } from '@models/';

@Injectable({
  providedIn: 'root'
})
export class FeedListingResolverService implements Resolve<Observable<Listing>> {

  constructor(private listingService: ListingService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Listing>> {
    const listingId = Number(route.paramMap.get('id'));
    const listingType = route.paramMap.get('listingType');
    console.log(this.listingService.getListing(listingId, listingType));
    return of(this.listingService.getListing(listingId, listingType));
  }
}
