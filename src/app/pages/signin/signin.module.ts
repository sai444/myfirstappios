import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,HttpClientModule,
    IonicModule,
    SigninPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
