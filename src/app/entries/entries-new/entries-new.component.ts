import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-new',
  templateUrl: './entries-new.component.html',
  styleUrls: ['./entries-new.component.css']
})
export class EntriesNewComponent implements OnInit {

  entryTypes = [
    { label: 'Earning', value: 'EARNING' },
    { label: 'Expense', value: 'EXPENSE' },
  ];

  categories = [
    { label: 'Leisure', value: 1 },
    { label: 'Health', value: 2 },
  ];

  persons = [
    { label: 'Kufathir Iszoion', value: 1 },
    { label: 'Keinnoa Orgur', value: 2 },
    { label: 'Baga Teasi', value: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
