import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedSearchPage } from './feed-search.page';

const routes: Routes = [
  {
    path: '',
    component: FeedSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedPageRoutingModule {}
