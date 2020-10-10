import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { OfferService } from '@services/index';
import { OfferListing } from '@models/';

@Injectable({
  providedIn: 'root'
})
export class FeedListingOffersResolverService implements Resolve<Observable<OfferListing[]>> {

  constructor(private offerService: OfferService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<OfferListing[]>> {
    const businessId = Number(route.paramMap.get('id'));
    return of(this.offerService.getOffersForBusiness(businessId));
  }
}
