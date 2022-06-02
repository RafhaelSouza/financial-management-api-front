import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports-entry',
  templateUrl: './reports-entry.component.html',
  styleUrls: ['./reports-entry.component.css']
})
export class ReportsEntryComponent implements OnInit {

  start_date: Date;
  end_date: Date;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
  }

  generate() {
    this.reportsService
    .reportEntriesByPerson(this.start_date, this.end_date)
      .then(report => {
        const url = window.URL.createObjectURL(report);

        window.open(url);
      });
  }

}
