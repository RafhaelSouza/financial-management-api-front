import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container">
    <h1 class="text-center">You are not authorized to view this page!</h1>
  </div>
  `,
})
export class NotAuthorizedPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
