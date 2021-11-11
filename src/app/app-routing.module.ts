import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAuthorizedPageComponent } from './core/not-authorized-page.component';
import { NotFoundPageComponent } from './core/not-found-page.component';

const routes: Routes = [
  { path: 'entries', loadChildren: () => import('app/entries/entries.module').then(m => m.EntriesModule) },

  { path: 'persons', loadChildren: () => import('app/persons/persons.module').then(m => m.PersonsModule) },

  { path: '', redirectTo: 'entries', pathMatch: 'full' },

  { path: 'not-authorized', component: NotAuthorizedPageComponent },

  { path: 'not-found', component: NotFoundPageComponent },
  /*{ path: '**', redirectTo: 'not-found-page' }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
