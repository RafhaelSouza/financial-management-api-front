import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsEntryComponent } from './reports-entry/reports-entry.component';

@NgModule({
  declarations: [ReportsEntryComponent],
  imports: [
    CommonModule,

    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
