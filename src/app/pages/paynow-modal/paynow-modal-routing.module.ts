import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaynowModalPage } from './paynow-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PaynowModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaynowModalPageRoutingModule {}
