import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PersonsModule } from './persons/persons.module';
import { EntriesModule } from './entries/entries.module';
import { PersonsSearchComponent } from './persons/persons-search/persons-search.component';
import { EntriesNewComponent } from './entries/entries-new/entries-new.component';
import { EntriesSearchComponent } from './entries/entries-search/entries-search.component';
import { NotFoundPageComponent } from './core/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesSearchComponent },
  { path: 'entries/new', component: EntriesNewComponent },
  { path: 'entries/:id', component: EntriesNewComponent },
  { path: 'persons', component: PersonsSearchComponent },
  { path: 'not-found-page', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'not-found-page' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    CoreModule,
    EntriesModule,
    PersonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
