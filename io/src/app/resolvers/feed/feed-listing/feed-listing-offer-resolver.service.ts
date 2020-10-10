import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { OfferService } from '@services/index';
import { OfferListing } from '@models/';

@Injectable({
  providedIn: 'root'
})
export class FeedListingOfferResolverService implements Resolve<Observable<OfferListing>> {

  constructor(private offerService: OfferService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<OfferListing>> {
    const offerId = Number(route.paramMap.get('offerId'));
    return of(this.offerService.getOffer(offerId));
  }
}
