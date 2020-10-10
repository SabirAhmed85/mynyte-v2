import { FeedHeaderSearchEventService } from '@/app/services/feed-header-search-event-service/feed-header-search-event-service.service';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-feed-header',
  templateUrl: 'feed-header.html',
  styleUrls: ['feed-header.scss']
})
export class FeedHeaderComponent implements OnDestroy {
  public showWhatsOpenScreen: boolean;
  public showSearchScreen: boolean;
  public searchString: string;
  public searchStringChanged: Subject<string> = new Subject<string>();

  private ngUnsubscribe = new Subject();

  constructor(private feedHeaderSearchEventService: FeedHeaderSearchEventService) {
    this.searchStringChanged
      .pipe(debounceTime(500), distinctUntilChanged()) // only emit if value is different from previous value
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(search => {
        this.searchString = search;
        this.feedHeaderSearchEventService.searchString$.next(this.searchString);
      });
  }

  public headerSearchInputWasFocused() {
    this.showSearchScreen = true;
    this.feedHeaderSearchEventService.showSearchScreen$.next(this.showSearchScreen);
  }

  public searchInputWasChanged(search: string) {
    this.searchStringChanged.next(search);
  }

  public whatsOpenButtonWasClicked() {
    this.showWhatsOpenScreen = true;
    this.feedHeaderSearchEventService.showWhatsOpenScreen$.next(this.showWhatsOpenScreen);
  }

  public closeButtonWasClicked() {
    this.searchString = '';
    this.showSearchScreen = false;
    this.showWhatsOpenScreen = false;
    this.searchStringChanged.next('');
    this.feedHeaderSearchEventService.showSearchScreen$.next(this.showSearchScreen);
    this.feedHeaderSearchEventService.showWhatsOpenScreen$.next(this.showWhatsOpenScreen);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
