import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingPageMenuItemComponent } from './listing-page-menu-item';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [ListingPageMenuItemComponent],
  exports: [ListingPageMenuItemComponent]
})
export class ListingPageMenuItemModule {}
