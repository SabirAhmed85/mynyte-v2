import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventListing } from '@models/';

const events: EventListing[] = [
  { listingId: 1, listingType: 'event', title: 'New Offer 1', description: 'Description', createdByBusinessId: 2 },
  { listingId: 2, listingType: 'event', title: 'New Offer 2', description: 'Description', createdByBusinessId: 4 },
  { listingId: 3, listingType: 'event', title: 'New Offer 3', description: 'Description', createdByBusinessId: 5 },
  { listingId: 4, listingType: 'event', title: 'New Offer 4', description: 'Description', createdByBusinessId: 1 },
  { listingId: 5, listingType: 'event', title: 'New Offer 5', description: 'Description', createdByBusinessId: 1 },
  { listingId: 6, listingType: 'event', title: 'New Offer 6', description: 'Description', createdByBusinessId: 3 },
  { listingId: 7, listingType: 'event', title: 'New Offer 7', description: 'Description', createdByBusinessId: 3 },
  { listingId: 8, listingType: 'event', title: 'New Offer 8', description: 'Description', createdByBusinessId: 4 }
];

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public events$: BehaviorSubject<EventListing[]> = new BehaviorSubject<EventListing[]>(events);

  public getEvents(): BehaviorSubject<EventListing[]> {
    return this.events$;
  }

  public getEventsForBusiness(businessId: number): Observable<EventListing[]> {
    console.log(businessId);
    return this.events$.pipe(map(results => results.filter(event => {
      console.log(event.createdByBusinessId);
      return event.createdByBusinessId === businessId;
    })));
  }

  public getEvent(id: number): Observable<EventListing> {
    return this.events$.pipe(map(results => results.filter(event => event.listingId === id)[0]));
  }
}
