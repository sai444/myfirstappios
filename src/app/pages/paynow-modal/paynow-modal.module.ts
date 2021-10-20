import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaynowModalPageRoutingModule } from './paynow-modal-routing.module';

import { PaynowModalPage } from './paynow-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaynowModalPageRoutingModule
  ],
  declarations: [PaynowModalPage]
})
export class PaynowModalPageModule {}
