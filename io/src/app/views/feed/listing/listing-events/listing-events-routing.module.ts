import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingEventsPage } from './listing-events.page';

const routes: Routes = [
  {
    path: '',
    component: ListingEventsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingEventsPageRoutingModule {}
