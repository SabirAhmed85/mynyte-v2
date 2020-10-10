import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNytePage } from './mynyte.page';

const routes: Routes = [
  {
    path: '',
    component: MyNytePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNytePageRoutingModule {}
