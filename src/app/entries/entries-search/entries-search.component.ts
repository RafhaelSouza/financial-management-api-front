import { EntryService } from './../entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent implements OnInit {

  entries = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.entryService.search()
      .then(entries => this.entries = entries);
  }

}
