import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { EntryService } from './../entries/entry.service';
import { PersonService } from './../persons/person.service';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,

    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    EntryService,
    PersonService,
    //ErrorHandlerService,

    ConfirmationService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
