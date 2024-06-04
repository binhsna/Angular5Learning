export class User {
  id = 0;
  name = '';
  email = "";
  addresses?: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
}

export const users: User[] = [
  {
    id: 1,
    name: 'Binh',
    email: "binhsna@gmail.com",
    addresses: [
      {street: '159/33 Quyet Thang street', city: 'Ha Noi', state: 'Mien Bac'},
      {street: '160/34 Quyet Thang street', city: 'Ha Noi', state: 'Mien Bac'}
    ]
  }, {
    id: 2,
    name: 'Alex',
    email: "alex234@gmail.com",
    addresses: [
      {street: '789 Elm', city: 'Smallville', state: 'Texas'}
    ]
  }, {
    id: 3,
    name: 'George',
    email: "george123@gmail.com",
    addresses: []
  },
];
export const states = ['Alaska', 'Colorado', 'Florida', 'Texas'];
