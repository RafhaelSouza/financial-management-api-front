import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { PersonService } from '../person.service';
import { Person } from '../../core/model';

@Component({
  selector: 'app-persons-form',
  templateUrl: './persons-form.component.html',
  styleUrls: ['./persons-form.component.css']
})
export class PersonsFormComponent implements OnInit {

  person = new Person();
  states: any[];

  constructor(
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    const personId = this.route.snapshot.params['id'];

    this.title.setTitle('New person');
    this.loadStates();

    if (personId) {
      this.loadPerson(personId);
    }
  }

  loadStates() {
    this.personService.listStates().then(listStates => {
      this.states = listStates.map(state => ({ label: state.name, value: state.id }));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  get updating() {
    return Boolean(this.person.id)
  }

  loadPerson(id: number) {
    this.personService.searchById(id)
      .then(person => {
        this.person = person;
        this.updateEditionTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  save(form: FormControl) {
    if (this.updating) {
      this.updatePerson(form);
    } else {
      this.insertPerson(form);
    }
  }

  insertPerson(form: FormControl) {
    this.personService.save(this.person)
      .then(savedPerson => {
        this.messageService.add({ severity: 'success', detail: 'Person saved successful!' });
        this.router.navigate(['/persons', savedPerson.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updatePerson(form: FormControl) {
    this.personService.update(this.person)
      .then(person => {
        this.person = person;

        this.messageService.add({ severity: 'success', detail: 'Person updated successful!' });
        this.updateEditionTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateEditionTitle() {
    this.title.setTitle(`Edition of person: ${this.person.name}`);
  }

  new(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.person = new Person();
    }.bind(this), 1);

    this.router.navigate(['/persons/new']);
  }

}
