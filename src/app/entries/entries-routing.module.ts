import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../security/auth.guard';
import { EntriesNewComponent } from './entries-new/entries-new.component';
import { EntriesSearchComponent } from './entries-search/entries-search.component';

const routes: Routes = [
  {
    path: '',
    component: EntriesSearchComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_ENTRY'] }
  },
  {
    path: 'new',
    component: EntriesNewComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SAVE_ENTRY'] }
  },
  {
    path: ':id',
    component: EntriesNewComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SAVE_ENTRY'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
