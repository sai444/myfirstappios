import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectDeliveryPageRoutingModule } from './select-delivery-routing.module';

import { SelectDeliveryPage } from './select-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectDeliveryPageRoutingModule
  ],
  declarations: [SelectDeliveryPage]
})
export class SelectDeliveryPageModule {}
