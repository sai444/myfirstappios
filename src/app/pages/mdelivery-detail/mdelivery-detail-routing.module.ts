import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdeliveryDetailPage } from './mdelivery-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MdeliveryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdeliveryDetailPageRoutingModule {}
