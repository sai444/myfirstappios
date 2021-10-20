import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FareDetailPageRoutingModule } from './fare-detail-routing.module';

import { FareDetailPage } from './fare-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FareDetailPageRoutingModule
  ],
  declarations: [FareDetailPage]
})
export class FareDetailPageModule {}
