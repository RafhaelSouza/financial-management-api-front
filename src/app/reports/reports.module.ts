import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from './../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsEntryComponent } from './reports-entry/reports-entry.component';

@NgModule({
  declarations: [ReportsEntryComponent],
  imports: [
    CommonModule,
    FormsModule,

    CalendarModule,

    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
