import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { Offer } from '../../../../../services/restaurant-service/node_modules/@models/';
import { CommonProvider } from '@app/providers/common-provider';


@Component({
  selector: 'app-offer',
  templateUrl: 'offer.page.html',
  styleUrls: ['offer.page.scss']
})
export class OfferPage implements OnInit {
  public offer$: Observable<Offer>;
  public offer = {} as Offer;

  constructor(private route: ActivatedRoute, private common: CommonProvider) { }

  ngOnInit() {
    this.common.loadingPresent('Loading Offer...').then(() => {
      this.offer$ = this.route.data.pipe(switchMap((data) => data.offer$ as Observable<Offer>));
      this.offer$.pipe(take(1)).subscribe((offer) => {
        this.offer = offer;
        this.common.loadingDismiss();
      });
    });
  }
}
