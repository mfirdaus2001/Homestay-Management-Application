import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicePageRoutingModule } from './invoice-routing.module';

import { InvoicePage } from './invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InvoicePage]
})
export class InvoicePageModule {}
