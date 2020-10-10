import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Listing } from '@models/';
import { listings } from '@app/constants/listings-data';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public restaurants$: BehaviorSubject<Listing[]> = new BehaviorSubject<Listing[]>(listings.filter(listing => listing.businessType === 'restaurant'));

  public getRestaurantSettings(restaurantId: number): Observable<Listing['restaurantSettings'][]> {
    return this.restaurants$
      .pipe(map(results => results.filter(restaurant => restaurant.listingId === restaurantId)
        .map(restaurant => (restaurant.restaurantSettings) )));
  }
}
