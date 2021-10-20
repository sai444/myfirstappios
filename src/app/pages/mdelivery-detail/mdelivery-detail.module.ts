import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdeliveryDetailPageRoutingModule } from './mdelivery-detail-routing.module';

import { MdeliveryDetailPage } from './mdelivery-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdeliveryDetailPageRoutingModule
  ],
  declarations: [MdeliveryDetailPage]
})
export class MdeliveryDetailPageModule {}
