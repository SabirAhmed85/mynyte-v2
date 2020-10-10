import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EventListing } from '@models/';
import { EventService } from '@/app/services/index';

@Injectable({
  providedIn: 'root'
})
export class FeedListingEventsResolverService implements Resolve<Observable<EventListing[]>> {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<EventListing[]>> {
    const businessId = Number(route.paramMap.get('id'));
    return of(this.eventService.getEventsForBusiness(businessId));
  }
}
