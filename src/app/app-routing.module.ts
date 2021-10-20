import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './core/not-found-page.component';
import { PersonsSearchComponent } from './persons/persons-search/persons-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'persons', component: PersonsSearchComponent },
  { path: 'not-found-page', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'not-found-page' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
