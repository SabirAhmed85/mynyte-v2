import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferPage } from './offer.page';

import { OfferPageRoutingModule } from './offer-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    OfferPageRoutingModule,
  ],
  declarations: [OfferPage]
})
export class OfferPageModule {}
