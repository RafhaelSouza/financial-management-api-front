import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EntriesNewComponent } from './entries-new/entries-new.component';
import { EntriesSearchComponent } from './entries-search/entries-search.component';

const routes: Routes = [
  { path: 'entries', component: EntriesSearchComponent },
  { path: 'entries/new', component: EntriesNewComponent },
  { path: 'entries/:id', component: EntriesNewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
