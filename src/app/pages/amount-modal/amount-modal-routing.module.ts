import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmountModalPage } from './amount-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AmountModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmountModalPageRoutingModule {}
