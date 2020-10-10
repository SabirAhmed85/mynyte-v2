import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingBookTablePage } from './listing-book-table.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBookTablePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingBookTablePageRoutingModule {}
