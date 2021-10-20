import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryBegunPageRoutingModule } from './delivery-begun-routing.module';

import { DeliveryBegunPage } from './delivery-begun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryBegunPageRoutingModule
  ],
  declarations: [DeliveryBegunPage]
})
export class DeliveryBegunPageModule {}
