import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingOfferPage } from './listing-offer.page';

const routes: Routes = [
  {
    path: '',
    component: ListingOfferPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingOfferPageRoutingModule {}
