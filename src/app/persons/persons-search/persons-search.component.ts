import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-search',
  templateUrl: './persons-search.component.html',
  styleUrls: ['./persons-search.component.css']
})
export class PersonsSearchComponent {

  persons = [
    { name: 'Kufathir Eazkioli', city: 'Belo Horizonte', state: 'MG', active: true },
    { name: 'Iszoion Nirond', city: 'Campinas', state: 'SP', active: false },
    { name: 'Keinnoa Orgur', city: 'Florianópolis', state: 'SC', active: true },
    { name: 'Baga Teasi', city: 'Cascavel', state: 'PR', active: true },
    { name: 'Fewaomub Mosilo', city: 'Búzios', state: 'RJ', active: false },
    { name: 'Winzae Pinpayndir', city: 'Belo Horizonte', state: 'MG', active: true }
  ];

}
