import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDetailPageRoutingModule } from './view-detail-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { ViewDetailPage } from './view-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ViewDetailPage]
})
export class ViewDetailPageModule {}
