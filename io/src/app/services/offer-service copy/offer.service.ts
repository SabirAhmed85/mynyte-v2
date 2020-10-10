import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offer } from '../restaurant-service/node_modules/@models/';

const offers: Offer[] = [
  { listingId: 1, listingType: 'offer', title: 'New Offer 1', description: 'Description', offerTypeId: 1, createdByBusinessId: 2 },
  { listingId: 2, listingType: 'offer', title: 'New Offer 2', description: 'Description', offerTypeId: 3, createdByBusinessId: 4 },
  { listingId: 3, listingType: 'offer', title: 'New Offer 3', description: 'Description', offerTypeId: 1, createdByBusinessId: 5 },
  { listingId: 4, listingType: 'offer', title: 'New Offer 4', description: 'Description', offerTypeId: 3, createdByBusinessId: 1 },
  { listingId: 5, listingType: 'offer', title: 'New Offer 5', description: 'Description', offerTypeId: 1, createdByBusinessId: 1 },
  { listingId: 6, listingType: 'offer', title: 'New Offer 6', description: 'Description', offerTypeId: 3, createdByBusinessId: 3 },
  { listingId: 7, listingType: 'offer', title: 'New Offer 7', description: 'Description', offerTypeId: 1, createdByBusinessId: 3 },
  { listingId: 8, listingType: 'offer', title: 'New Offer 8', description: 'Description', offerTypeId: 3, createdByBusinessId: 4 }
];

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  public offers$: BehaviorSubject<Offer[]> = new BehaviorSubject<Offer[]>(offers);

  public getOffers(): BehaviorSubject<Offer[]> {
    return this.offers$;
  }

  public getOffersForBusiness(businessId: number): Observable<Offer[]> {
    return this.offers$.pipe(map(results => results.filter(offer => offer.createdByBusinessId === businessId)));
  }

  public getOffer(id: number): Observable<Offer> {
    return this.offers$.pipe(map(results => results.filter(offer => offer.listingId === id)[0]));
  }
}
