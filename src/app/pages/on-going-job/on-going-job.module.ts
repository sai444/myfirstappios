import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnGoingJobPageRoutingModule } from './on-going-job-routing.module';

import { OnGoingJobPage } from './on-going-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnGoingJobPageRoutingModule
  ],
  declarations: [OnGoingJobPage]
})
export class OnGoingJobPageModule {}
