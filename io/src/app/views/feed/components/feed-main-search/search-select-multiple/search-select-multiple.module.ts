import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchSelectMultipleComponent } from './search-select-multiple';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [SearchSelectMultipleComponent],
  exports: [SearchSelectMultipleComponent]
})
export class SearchSelectMultipleModule {}
