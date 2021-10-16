export class Person {
  id: number;
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
