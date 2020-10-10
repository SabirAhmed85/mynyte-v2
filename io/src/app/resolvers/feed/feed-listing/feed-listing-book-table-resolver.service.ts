import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EventListing, Listing } from '@models/';
import { EventService, RestaurantService } from '@/app/services/index';

@Injectable({
  providedIn: 'root'
})
export class FeedListingBookTableResolverService implements Resolve<Observable<Listing['restaurantSettings'][]>> {

  constructor(private restaurantService: RestaurantService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<Listing['restaurantSettings'][]>> {
    const restaurantId = Number(route.paramMap.get('id'));
    return of(this.restaurantService.getRestaurantSettings(restaurantId));
  }
}
