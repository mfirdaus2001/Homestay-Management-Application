import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatereservePageRoutingModule } from './updatereserve-routing.module';

import { UpdatereservePage } from './updatereserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatereservePageRoutingModule
  ],
  declarations: [UpdatereservePage]
})
export class UpdatereservePageModule {}
