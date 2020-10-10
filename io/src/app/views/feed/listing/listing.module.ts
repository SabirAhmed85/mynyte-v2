import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPage } from './listing.page';

import { ListingPageRoutingModule } from './listing-routing.module';
import { ListingPageMenuModule } from './listing-page-menu/listing-page-menu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ListingPageRoutingModule,
    ListingPageMenuModule,
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
