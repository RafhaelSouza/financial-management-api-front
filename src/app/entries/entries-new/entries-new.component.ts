import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private categoryService:CategoryService,
    private personService:PersonService,
    private entryService:EntryService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('New Entry');

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
        this.updateEditionTitle();
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
    if (this.updating) {
      this.updateEntry(form);
    } else {
      this.insertEntry(form);
    }
  }

  insertEntry(form: FormControl) {
    this.entryService.save(this.entry)
      .then(savedEntry => {
        this.messageService.add({ severity: 'success', detail: 'Entry saved successful!' });

        this.router.navigate(['/entries', savedEntry.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateEntry(form: FormControl) {
    this.entryService.update(this.entry)
      .then(entry => {
        this.entry = entry;

        this.messageService.add({ severity: 'success', detail: 'Entry updated successful!' });
        this.updateEditionTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  new(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.entry = new Entry();
    }.bind(this), 1);

    this.router.navigate(['/entries/new']);
  }

  updateEditionTitle() {
    this.title.setTitle(`Edition of entry: ${this.entry.description}`);
  }

}
