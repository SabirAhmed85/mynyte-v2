import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandableComponent } from './expandable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [ExpandableComponent],
  exports: [ExpandableComponent]
})
export class ExpandableModule {}
