import { EntryService } from './../entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent implements OnInit {

  description: string;
  entries = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.entryService.search({description: this.description})
      .then(entries => this.entries = entries);
  }

}
