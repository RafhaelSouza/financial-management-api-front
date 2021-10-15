import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../categories/category.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

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

  categories = [];

  persons = [
    { label: 'Kufathir Iszoion', value: 1 },
    { label: 'Keinnoa Orgur', value: 2 },
    { label: 'Baga Teasi', value: 3 },
  ];

  constructor(
    private errorHandler: ErrorHandlerService,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    return this.categoryService.listAll()
      .then(categories => {
        this.categories = categories.map(cat => ({ label: cat.name, value: cat.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
