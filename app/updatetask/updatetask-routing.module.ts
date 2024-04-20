import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatetaskPage } from './updatetask.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatetaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatetaskPageRoutingModule {}
