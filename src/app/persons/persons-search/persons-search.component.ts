import { PersonFilter, PersonService } from './../person.service';
import { LazyLoadEvent } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-search',
  templateUrl: './persons-search.component.html',
  styleUrls: ['./persons-search.component.css']
})
export class PersonsSearchComponent {

  totalRegisters = 0;
  filter = new PersonFilter;
  persons = [];

  constructor(private personService: PersonService) { }

  search(page = 0) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .then(result => {
        this.totalRegisters = result.total;
        this.persons = result.persons;
      });
  }

  toChangePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

}
