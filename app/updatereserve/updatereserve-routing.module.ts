import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatereservePage } from './updatereserve.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatereservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatereservePageRoutingModule {}
