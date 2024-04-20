import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatetaskPageRoutingModule } from './updatetask-routing.module';

import { UpdatetaskPage } from './updatetask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatetaskPageRoutingModule
  ],
  declarations: [UpdatetaskPage]
})
export class UpdatetaskPageModule {}
