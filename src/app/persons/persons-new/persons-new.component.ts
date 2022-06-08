import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { PersonService } from '../person.service';
import { Person, Contact } from './../../core/model';

@Component({
  selector: 'app-persons-new',
  templateUrl: './persons-new.component.html',
  styleUrls: ['./persons-new.component.css']
})
export class PersonsNewComponent implements OnInit {

  person = new Person();
  displayContactForm = false;
  contact: Contact;
  contactIndex: number;

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

    if (personId) {
      this.loadPerson(personId);
    }
  }

  setNewContact() {
    this.displayContactForm = true;
    this.contact = new Contact();
    this.contactIndex = this.person.contacts.length;
  }

  setUpdateContact(contact: Contact, index: number) {
    this.contact = this.contactClone(contact);
    this.displayContactForm = true;
    this.contactIndex = index;
  }

  saveContact(form: FormControl) {
    this.person.contacts[this.contactIndex] = this.contactClone(this.contact);
    this.displayContactForm = false;
    form.reset();
  }

  contactClone(contact: Contact): Contact {
    return new Contact(contact.id, contact.name, contact.email, contact.telephone);
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
