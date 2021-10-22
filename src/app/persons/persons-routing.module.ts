import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { PersonsNewComponent } from './persons-new/persons-new.component';

const routes: Routes = [
  { path: 'persons', component: PersonsSearchComponent },
  { path: 'persons/new', component: PersonsNewComponent },
  { path: 'persons/:id', component: PersonsNewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
