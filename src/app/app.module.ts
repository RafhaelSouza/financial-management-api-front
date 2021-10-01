import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

// Other Modules
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { NavbarComponent } from './navbar/navbar.component';
import { EntriesSearchComponent } from './entries-search/entries-search.component';
import { EntriesNewComponent } from './entries-new/entries-new.component';
import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { PersonsNewComponent } from './persons-new/persons-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntriesSearchComponent,
    EntriesNewComponent,
    PersonsSearchComponent,
    PersonsNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
