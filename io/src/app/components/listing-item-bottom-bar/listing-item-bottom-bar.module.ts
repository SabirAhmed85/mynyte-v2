import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingItemBottomBarComponent } from './listing-item-bottom-bar';
import { IonSmallButtonModule } from '@components/ion-small-button/ion-small-button.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    IonSmallButtonModule
  ],
  declarations: [ListingItemBottomBarComponent],
  exports: [ListingItemBottomBarComponent]
})
export class ListingItemBottomBarModule {}
