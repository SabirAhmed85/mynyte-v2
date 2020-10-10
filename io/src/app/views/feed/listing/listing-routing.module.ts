import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingOffersPage } from './listing-offers/listing-offers.page';
import { ListingPage } from './listing.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingPageRoutingModule {}
