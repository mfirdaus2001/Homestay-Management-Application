import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewreservePageRoutingModule } from './addnewreserve-routing.module';

import { AddnewreservePage } from './addnewreserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewreservePageRoutingModule
  ],
  declarations: [AddnewreservePage]
})
export class AddnewreservePageModule {}
