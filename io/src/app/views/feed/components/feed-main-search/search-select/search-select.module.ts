import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchSelectComponent } from './search-select';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [SearchSelectComponent],
  exports: [SearchSelectComponent]
})
export class SearchSelectModule {}
