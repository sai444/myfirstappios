import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceDetailPageRoutingModule } from './price-detail-routing.module';

import { PriceDetailPage } from './price-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriceDetailPageRoutingModule
  ],
  declarations: [PriceDetailPage]
})
export class PriceDetailPageModule {}
