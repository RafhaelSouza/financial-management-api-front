import { EntryService, EntryFilter } from './../entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent implements OnInit {

  filter = new EntryFilter();
  entries = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.entryService.search(this.filter)
      .then(result => {
        this.entries = result.entries;
      });
  }

}
