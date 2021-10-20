import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FareDetailPage } from './fare-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FareDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FareDetailPageRoutingModule {}
