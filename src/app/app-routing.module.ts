import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './core/not-found-page.component';

const routes: Routes = [
  //{ path: 'entries', loadChildren: () => import('src/app/entries/entries.module').then(m => m.EntriesModule) },
  //{ path: 'entries', component: EntriesSearchComponent },

  { path: '', redirectTo: 'entries', pathMatch: 'full' },

  { path: 'not-found-page', component: NotFoundPageComponent },
  //{ path: '**', redirectTo: 'not-found-page' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
