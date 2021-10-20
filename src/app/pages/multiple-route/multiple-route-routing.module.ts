import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleRoutePage } from './multiple-route.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleRoutePageRoutingModule {}
