import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { PersonsNewComponent } from './persons-new/persons-new.component';
import { PersonsGridComponent } from './persons-grid/persons-grid.component';
import { PersonsFormContactComponent } from './persons-form-contact/persons-form-contact.component';

@NgModule({
  declarations: [
    PersonsSearchComponent,
    PersonsNewComponent,
    PersonsGridComponent,
    PersonsFormContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    PanelModule,
    DialogModule,

    SharedModule,
    PersonsRoutingModule
  ],
  exports: []
})
export class PersonsModule { }
