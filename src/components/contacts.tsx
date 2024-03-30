export interface IContacts {
  id: number;
  name: string;
  email: string;
}

export const usersContacts: IContacts[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
