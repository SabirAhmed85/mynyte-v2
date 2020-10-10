import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeedMainSearchComponent } from './feed-main-search';
import { ExpandableModule } from '@app/components/expandable/expandable.module';
import { ComplexSelectModalModule } from '@app/components/complex-select-modal/complex-select-modal.module';
import { SearchSelectModule } from './search-select/search-select.module';
import { SearchSelectMultipleModule } from './search-select-multiple/search-select-multiple.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExpandableModule,
    ComplexSelectModalModule,
    SearchSelectModule,
    SearchSelectMultipleModule,
  ],
  declarations: [FeedMainSearchComponent],
  exports: [FeedMainSearchComponent]
})
export class FeedMainSearchModule {}
