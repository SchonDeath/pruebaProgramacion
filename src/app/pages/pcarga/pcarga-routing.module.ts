import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcargaPage } from './pcarga.page';

const routes: Routes = [
  {
    path: '',
    component: PcargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcargaPageRoutingModule {}
