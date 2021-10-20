import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnGoingJobPage } from './on-going-job.page';

const routes: Routes = [
  {
    path: '',
    component: OnGoingJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnGoingJobPageRoutingModule {}
