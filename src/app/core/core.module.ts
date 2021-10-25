import localePt from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { AuthService } from './../security/auth.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EntryService } from './../entries/entry.service';
import { PersonService } from './../persons/person.service';
import { CategoryService } from './../categories/category.service';
import { ErrorHandlerService } from './error-handler.service';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [NavbarComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule,

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
    CategoryService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
    MessageService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
