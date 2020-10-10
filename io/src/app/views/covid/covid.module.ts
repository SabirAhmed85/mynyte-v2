import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CovidPage } from './covid.page';

import { CovidPageRoutingModule } from './covid-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CovidPageRoutingModule
  ],
  declarations: [CovidPage]
})
export class CovidPageModule {}
