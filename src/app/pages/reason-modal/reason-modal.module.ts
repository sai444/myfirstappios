import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReasonModalPageRoutingModule } from './reason-modal-routing.module';

import { ReasonModalPage } from './reason-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReasonModalPageRoutingModule
  ],
  declarations: [ReasonModalPage]
})
export class ReasonModalPageModule {}
