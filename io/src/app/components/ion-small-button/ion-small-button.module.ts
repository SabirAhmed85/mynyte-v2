import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonSmallButtonComponent } from './ion-small-button';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [IonSmallButtonComponent],
  exports: [IonSmallButtonComponent]
})
export class IonSmallButtonModule {}
