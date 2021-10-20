import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { EmergenceContactPageRoutingModule } from './emergence-contact-routing.module';

import { EmergenceContactPage } from './emergence-contact.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    EmergenceContactPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [EmergenceContactPage],
  providers: [
    
    
    CallNumber
  
]
})
export class EmergenceContactPageModule {}
