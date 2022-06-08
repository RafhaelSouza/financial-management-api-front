import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Contact } from 'app/core/model';

@Component({
  selector: 'app-persons-form-contact',
  templateUrl: './persons-form-contact.component.html',
  styleUrls: ['./persons-form-contact.component.css']
})
export class PersonsFormContactComponent implements OnInit {

  @Input() contacts: Array<Contact>;
  displayContactForm = false;
  contact: Contact;
  contactIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  setNewContact() {
    this.displayContactForm = true;
    this.contact = new Contact();
    this.contactIndex = this.contacts.length;
  }

  setUpdateContact(contact: Contact, index: number) {
    this.contact = this.contactClone(contact);
    this.displayContactForm = true;
    this.contactIndex = index;
  }

  saveContact(form: FormControl) {
    this.contacts[this.contactIndex] = this.contactClone(this.contact);
    this.displayContactForm = false;
    form.reset();
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  contactClone(contact: Contact): Contact {
    return new Contact(contact.id, contact.name, contact.email, contact.telephone);
  }

  get updating() {
    return Boolean(this.contact && this.contact.id)
  }

}
