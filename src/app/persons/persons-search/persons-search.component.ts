import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { AuthService } from './../../security/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PersonFilter, PersonService } from './../person.service';

@Component({
  selector: 'app-persons-search',
  templateUrl: './persons-search.component.html',
  styleUrls: ['./persons-search.component.css']
})
export class PersonsSearchComponent {

  totalRegisters = 0;
  filter = new PersonFilter;
  persons = [];
  @ViewChild('tabela') grid: Table;

  constructor(
    public auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private personService: PersonService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Entries Search');
  }

  search(page = 0) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .then(result => {
        this.totalRegisters = result.total;
        this.persons = result.persons;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  toChangePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  updateStatus(person: any): void {
    const newStatus = !person.active;

    this.personService.updateStatus(person.id, newStatus)
      .then(() => {
        const action = newStatus ? 'active' : 'inactive';

        person.active = newStatus;
        this.messageService.add({ severity: 'success', detail: `person ${action} successful!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  toConfirmDeleting(entry: any) {
    this.confirmation.confirm({
      message: 'Are you sure about this?',
      accept: () => {
        this.delete(entry);
      }
    });
  }

  delete(person: any) {
    this.personService.delete(person.id)
      .then(() => {
        this.grid.clear();

        this.messageService.add({ severity: 'success', detail: 'Person deleted successful!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
