import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmountModalPageRoutingModule } from './amount-modal-routing.module';

import { AmountModalPage } from './amount-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmountModalPageRoutingModule
  ],
  declarations: [AmountModalPage]
})
export class AmountModalPageModule {}
