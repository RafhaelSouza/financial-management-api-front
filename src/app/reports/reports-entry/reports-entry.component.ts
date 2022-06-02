import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-entry',
  templateUrl: './reports-entry.component.html',
  styleUrls: ['./reports-entry.component.css']
})
export class ReportsEntryComponent implements OnInit {

  start_date: Date;
  end_date: Date;

  constructor() { }

  ngOnInit(): void {
  }

  generate() {
    console.log(this.start_date);
    console.log(this.end_date);
  }

}
