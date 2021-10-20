import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceDetailPage } from './price-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PriceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceDetailPageRoutingModule {}
