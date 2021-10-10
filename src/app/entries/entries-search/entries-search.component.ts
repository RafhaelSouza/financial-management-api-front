import { EntryService, EntryFilter } from './../entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent implements OnInit {

  description: string;
  dueDateFrom: Date;
  dueDateTo: Date;
  entries = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    const filter: EntryFilter = {
      description: this.description,
      dueDateFrom: this.dueDateFrom,
      dueDateTo: this.dueDateTo
    };

    this.entryService.search(filter)
      .then(entries => this.entries = entries);
  }

}
