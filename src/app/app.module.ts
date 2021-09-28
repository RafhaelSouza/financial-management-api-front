import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { NavbarComponent } from './navbar/navbar.component';
import { EntriesSearchComponent } from './entries-search/entries-search.component';
import { EntriesNewComponent } from './entries-new/entries-new.component';
import { PersonsSearchComponent } from './persons-search/persons-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntriesSearchComponent,
    EntriesNewComponent,
    PersonsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
