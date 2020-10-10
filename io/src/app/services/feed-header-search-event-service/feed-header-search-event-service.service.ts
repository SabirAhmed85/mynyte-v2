import { Listing } from '@/app/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedHeaderSearchEventService {
  public showSearchScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showWhatsOpenScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public searchString$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public listingClicked$: Subject<Listing> = new Subject<Listing>();

  public showSearchScreen() {
    return this.showSearchScreen$;
  }

  public showWhatsOpenScreen() {
    return this.showWhatsOpenScreen$;
  }

  public searchString() {
    return this.searchString$;
  }

  public listingClicked() {
    return this.listingClicked$;
  }
}
