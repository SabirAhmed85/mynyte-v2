import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeedHeaderComponent } from './feed-header';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [FeedHeaderComponent],
  exports: [FeedHeaderComponent]
})
export class FeedHeaderModule {}
