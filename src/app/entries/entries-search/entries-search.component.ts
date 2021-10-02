import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent {

  entries = [
    { entryType: 'EXPENSE', description: 'Kufathir', dueDate: new Date(2021, 6, 30),
      paymentDate: null, price: 4.55, person: 'Eazkioli' },

    { entryType: 'EARNING', description: 'Iszoion', dueDate: new Date(2021, 6, 10),
      paymentDate: new Date(2021, 6, 9), price: 80000, person: 'Nirond' },

    { entryType: 'EXPENSE', description: 'Keinnoa', dueDate: new Date(2021, 7, 20),
      paymentDate: null, price: 14312, person: 'Orgur' },

    { entryType: 'EXPENSE', description: 'Baga', dueDate: new Date(2021, 6, 5),
      paymentDate: new Date(2021, 6, 30), price: 800, person: 'Teasi' },

    { entryType: 'EARNING', description: 'Fewaomub', dueDate: new Date(2021, 8, 18),
      paymentDate: null, price: 55000, person: 'Fewaomub' },

    { entryType: 'EXPENSE', description: 'Mosilo', dueDate: new Date(2021, 7, 10),
      paymentDate: new Date(2021, 7, 9), price: 1750, person: 'Byun' },

    { entryType: 'EXPENSE', description: 'Winzae', dueDate: new Date(2021, 7, 13),
      paymentDate: null, price: 180, person: 'Pinpayndir' }
  ];

}
