export class State {
  id: number;
  name: string;
}

export class City {
  id: number;
  name: string;
  state = new State();
}

export class Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  postal_code: string;
  city= new City();
}

export class Contact {
  id: number;
  name: string;
  email: string;
  telephone: string;

  constructor(id?: number, name?: string, email?: string, telephone?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
  }
}
export class Person {
  id: number;
  name: string;
  address = new Address();
  active = true;
  contacts = new Array<Contact>();
}
export class Category {
  id: number;
}
export class Entry {
  id: number;
  entry_type = 'EXPENSE';
  description: string;
  due_date: Date;
  payment_date: Date;
  price: number;
  observation: string;
  person = new Person();
  category = new Category();
  attachment: string;
  attachment_url: string;
}
