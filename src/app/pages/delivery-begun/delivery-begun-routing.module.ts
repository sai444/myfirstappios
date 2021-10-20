import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryBegunPage } from './delivery-begun.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryBegunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryBegunPageRoutingModule {}
