import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewreservePage } from './addnewreserve.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewreservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewreservePageRoutingModule {}
