import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries-search',
  templateUrl: './entries-search.component.html',
  styleUrls: ['./entries-search.component.css']
})
export class EntriesSearchComponent {

  entries = [
    { entryType: 'EXPENSE', description: 'Kufathir', dueDate: '30/06/2021',
      paymentDate: null, price: 4.55, person: 'Eazkioli' },

    { entryType: 'EARNING', description: 'Iszoion', dueDate: '10/06/2021',
      paymentDate: '09/06/2021', price: 80000, person: 'Nirond' },

    { entryType: 'EXPENSE', description: 'Keinnoa', dueDate: '20/07/2021',
      paymentDate: null, price: 14312, person: 'Orgur' },

    { entryType: 'EXPENSE', description: 'Baga', dueDate: '05/06/2021',
      paymentDate: '30/05/2021', price: 800, person: 'Teasi' },

    { entryType: 'EARNING', description: 'Fewaomub', dueDate: '18/08/2021',
      paymentDate: null, price: 55000, person: 'Fewaomub' },

    { entryType: 'EXPENSE', description: 'Mosilo', dueDate: '10/07/2021',
      paymentDate: '09/07/2021', price: 1750, person: 'Byun' },

    { entryType: 'EXPENSE', description: 'Winzae', dueDate: '13/07/2021',
      paymentDate: null, price: 180, person: 'Pinpayndir' }
  ];

}
