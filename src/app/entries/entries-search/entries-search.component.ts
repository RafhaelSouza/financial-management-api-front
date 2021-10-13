import { EntryService, EntryFilter } from './../entry.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

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

  constructor(private entryService: EntryService) { }

  ngOnInit() {}

  search(page = 0) {
    this.filter.page = page;

    this.entryService.search(this.filter)
      .then(result => {
        this.totalRegisters = result.total;
        this.entries = result.entries;
      });
  }

  toChangePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  delete(entry: any) {
    this.entryService.delete(entry.id)
      .then(() => {
        this.grid.clear();
      });
  }

}
