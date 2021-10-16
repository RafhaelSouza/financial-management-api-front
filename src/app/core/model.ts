export class Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  postal_code: string;
  city: string;
  state: string;
}
export class Person {
  id: number;
  name: string;
  address = new Address();
  active = true;
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
