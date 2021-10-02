import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="hasErrorCustom()" class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: [`
    .p-message-error {
      padding: 3px;
      margin: 0;
      margin-top: 4px;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  hasErrorCustom(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
