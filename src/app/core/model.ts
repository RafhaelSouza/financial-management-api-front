export class Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  postal_code: string;
  city: string;
  state: string;
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
}
