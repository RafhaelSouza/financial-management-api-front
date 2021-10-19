import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PersonService } from './../../persons/person.service';
import { CategoryService } from './../../categories/category.service';
import { Entry } from './../../core/model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries-new',
  templateUrl: './entries-new.component.html',
  styleUrls: ['./entries-new.component.css']
})
export class EntriesNewComponent implements OnInit {

  entry_types = [
    { label: 'Earning', value: 'EARNING' },
    { label: 'Expense', value: 'EXPENSE' },
  ];

  categories = [];
  persons = [];
  entry = new Entry();

  constructor(
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private categoryService:CategoryService,
    private personService:PersonService,
    private entryService:EntryService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadPersons();

    const entryId = this.route.snapshot.params['id'];

    if (entryId) {
      this.loadEntry(entryId);
    }
  }

  get updating() {
    return Boolean(this.entry.id)
  }

  loadEntry(id: number) {
    this.entryService.searchById(id)
      .then(entry => {
        this.entry = entry;
      })
      .catch(erro => this.errorHandler.handle(erro));
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

  save(form: FormControl) {
    this.entryService.save(this.entry)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Entry saved successful!' });

        form.reset();
        this.entry = new Entry();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
