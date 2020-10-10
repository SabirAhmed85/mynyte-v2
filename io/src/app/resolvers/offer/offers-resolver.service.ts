import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { OfferService } from '@services/index';
import { OfferListing } from '@models/';

@Injectable({
  providedIn: 'root'
})
export class OffersResolverService implements Resolve<Observable<OfferListing[]>> {

  constructor(private offerService: OfferService) { }

  resolve(): Observable<Observable<OfferListing[]>> {
    return of(this.offerService.getOffers());
  }
}
