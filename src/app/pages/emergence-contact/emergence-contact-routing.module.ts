import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenceContactPage } from './emergence-contact.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenceContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenceContactPageRoutingModule {}
