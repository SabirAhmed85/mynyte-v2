import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingOffersPage } from './listing-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ListingOffersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingOffersPageRoutingModule {}
