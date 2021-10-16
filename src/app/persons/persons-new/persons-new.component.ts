import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PersonService } from '../person.service';
import { Person } from './../../core/model';

@Component({
  selector: 'app-persons-new',
  templateUrl: './persons-new.component.html',
  styleUrls: ['./persons-new.component.css']
})
export class PersonsNewComponent implements OnInit {

  person = new Person();

  constructor(
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
  }

  save(form: FormControl) {
    this.personService.save(this.person)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Person saved successful!' });

        form.reset();
        this.person = new Person();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
