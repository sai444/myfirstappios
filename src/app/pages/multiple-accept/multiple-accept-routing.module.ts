import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleAcceptPage } from './multiple-accept.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleAcceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleAcceptPageRoutingModule {}
