import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReasonModalPage } from './reason-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReasonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReasonModalPageRoutingModule {}
