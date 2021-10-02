import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entries-grid',
  templateUrl: './entries-grid.component.html',
  styleUrls: ['./entries-grid.component.css']
})
export class EntriesGridComponent {

  @Input() entries = [];

}
