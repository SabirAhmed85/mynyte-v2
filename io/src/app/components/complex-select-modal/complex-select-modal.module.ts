import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexSelectModalComponent } from './complex-select-modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [ComplexSelectModalComponent],
  exports: [ComplexSelectModalComponent]
})
export class ComplexSelectModalModule {}
