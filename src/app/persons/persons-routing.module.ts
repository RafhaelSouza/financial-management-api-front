import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../security/auth.guard';
import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { PersonsFormComponent } from './persons-form/persons-form.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsSearchComponent ,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_PERSON'] }
  },
  {
    path: 'new',
    component: PersonsFormComponent ,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SAVE_PERSON'] }
  },
  {
    path: ':id',
    component: PersonsFormComponent ,
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
export class PersonsRoutingModule { }
