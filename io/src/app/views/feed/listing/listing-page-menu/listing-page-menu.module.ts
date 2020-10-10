import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingPageMenuComponent } from './listing-page-menu';
import { ListingPageMenuItemModule } from './listing-page-menu-item/listing-page-menu-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingPageMenuItemModule,
  ],
  declarations: [ListingPageMenuComponent],
  exports: [ListingPageMenuComponent]
})
export class ListingPageMenuModule {}
