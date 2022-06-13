import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { PersonService } from '../../persons/person.service';
import { CategoryService } from '../../categories/category.service';
import { Entry } from '../../core/model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entries-form',
  templateUrl: './entries-form.component.html',
  styleUrls: ['./entries-form.component.css']
})
export class EntriesFormComponent implements OnInit {

  entry_types = [
    { label: 'Earning', value: 'EARNING' },
    { label: 'Expense', value: 'EXPENSE' },
  ];

  categories = [];
  persons = [];
  entryForm: FormGroup;
	ongoingUpload = false;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private personService: PersonService,
    private entryService: EntryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setForm();

    this.title.setTitle('New Entry');

    this.loadCategories();
    this.loadPersons();

    const entryId = this.route.snapshot.params['id'];

    if (entryId) {
      this.loadEntry(entryId);
    }
  }

	beforeAttachmentUpload() {
		this.ongoingUpload = true;
	}

  finishAttachUpload(event) {
    const attachment = event.originalEvent.body;

    this.entryForm.patchValue({
      attachment: attachment.name,
      attachment_url: attachment.url
    });

    this.ongoingUpload = false;
  }

  deleteAttachment() {
    this.entryForm.patchValue({
      attachment: null,
      attachment_url: null
    });
  }

  uploadError(event) {
    this.messageService.add({ severity: 'error', detail: 'An error has occurred trying to attach file' });
    this.ongoingUpload = false;
  }

  get attachmentName() {
    const name = this.entryForm.get('attachment').value;

    if (name) {
      return name.substring(name.indexOf('_') + 1, name.length);
    }

    return '';
  }

  get attachUploadUrl() {
    return this.entryService.attachUploadUrl();
  }

  setForm() {
    this.entryForm = this.formBuilder.group({
      id: [],
      entry_type: [ 'EXPENSE', Validators.required ],
      due_date: [ null, Validators.required ],
      payment_date: [],
      description: [null, [ this.requiredCustomValidator, this.minSizeCustomValidator(5) ]],
      price: [ null, Validators.required ],
      person: this.formBuilder.group({
        id: [ null, Validators.required ],
        name: []
      }),
      category: this.formBuilder.group({
        id: [ null, Validators.required ],
        name: []
      }),
      observation: [],
      attachment: [],
      attachment_url: []
    });
  }

  requiredCustomValidator(input: FormControl) {
    //let dueDt = input.root.get('due_date').value;
    return (input.value ? null : { customRequired: true });
  }

  minSizeCustomValidator(value: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= value) ? null : { minSizeCustom: { sizeCustom: value } };
    };
  }

  get updating() {
    return Boolean(this.entryForm.get('id').value)
  }

  loadEntry(id: number) {
    this.entryService.searchById(id)
      .then(entry => {
        this.entryForm.patchValue(entry);
        this.updateEditionTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  loadCategories() {
    return this.categoryService.listAll()
      .then(categories => {
        this.categories = categories.map(cat => ({ label: cat.name, value: cat.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  loadPersons() {
    return this.personService.listAll()
      .then(persons => {
        this.persons = persons.map(p => ({ label: p.name, value: p.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  save() {
    if (this.updating) {
      this.updateEntry();
    } else {
      this.insertEntry();
    }
  }

  insertEntry() {
    this.entryService.save(this.entryForm.value)
      .then(savedEntry => {
        this.messageService.add({ severity: 'success', detail: 'Entry saved successful!' });

        this.router.navigate(['/entries', savedEntry.id]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateEntry() {
    this.entryService.update(this.entryForm.value)
      .then(entry => {
        this.entryForm.patchValue(entry);

        this.messageService.add({ severity: 'success', detail: 'Entry updated successful!' });
        this.updateEditionTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateEditionTitle() {
    this.title.setTitle(`Edition of entry: ${this.entryForm.get('description').value}`);
  }

  new() {
    this.entryForm.reset();

    setTimeout(function() {
      this.entry = new Entry();
    }.bind(this), 1);

    this.router.navigate(['/entries/new']);
  }

}
