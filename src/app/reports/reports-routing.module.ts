import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsEntryComponent } from './reports-entry/reports-entry.component';
import { AuthGuard } from './../security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ReportsEntryComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_SEARCH_ENTRY'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
