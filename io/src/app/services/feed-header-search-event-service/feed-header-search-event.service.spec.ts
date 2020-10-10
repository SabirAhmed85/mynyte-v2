import { TestBed } from '@angular/core/testing';

import { FeedHeaderSearchEventService } from './feed-header-search-event-service.service';

describe('FeedHeaderSearchEventService', () => {
  let service: FeedHeaderSearchEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedHeaderSearchEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
