import { PersonService } from './../../persons/person.service';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-entries-new',
  templateUrl: './entries-new.component.html',
  styleUrls: ['./entries-new.component.css']
})
export class EntriesNewComponent implements OnInit {

  entryTypes = [
    { label: 'Earning', value: 'EARNING' },
    { label: 'Expense', value: 'EXPENSE' },
  ];

  categories = [];

  persons = [];

  constructor(
    private errorHandler: ErrorHandlerService,
    private categoryService:CategoryService,
    private personService:PersonService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadPersons();
  }

  loadCategories() {
    return this.categoryService.listAll()
      .then(categories => {
        this.categories = categories.map(cat => ({ label: cat.name, value: cat.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  loadPersons() {
    return this.personService.listAll()
      .then(persons => {
        this.persons = persons.map(p => ({ label: p.name, value: p.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
