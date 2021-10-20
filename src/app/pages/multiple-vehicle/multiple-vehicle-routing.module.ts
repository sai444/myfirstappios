import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleVehiclePage } from './multiple-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleVehiclePageRoutingModule {}
