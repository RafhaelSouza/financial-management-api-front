import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService, ConfirmationService} from 'primeng/api';
import { Table } from 'primeng/table';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { EntryService, EntryFilter } from './../entry.service';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent implements OnInit {

  totalRegisters = 0;
  filter = new EntryFilter();
  entries = [];
  @ViewChild('tableSearch') grid: Table;

  constructor(
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private entryService: EntryService
  ) { }

  ngOnInit() {}

  search(page = 0) {
    this.filter.page = page;

    this.entryService.search(this.filter)
      .then(result => {
        this.totalRegisters = result.total;
        this.entries = result.entries;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  toChangePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  toConfirmDeleting(entry: any) {
    this.confirmation.confirm({
      message: 'Are you sure about this?',
      accept: () => {
        this.delete(entry);
      }
    });
  }

  delete(entry: any) {
    this.entryService.delete(entry.id)
      .then(() => {
        this.grid.clear();

        this.messageService.add({ severity: 'success', detail: 'Entry deleted successful!' });
      });
  }

}
