import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyNytePage } from './mynyte.page';

import { MyNytePageRoutingModule } from './mynyte-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyNytePage }]),
    MyNytePageRoutingModule,
  ],
  declarations: [MyNytePage]
})
export class MyNytePageModule {}
