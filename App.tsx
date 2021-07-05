import React from 'react';
import Contact from './src/components/Contact';
import ListContacts from './src/components/ListContact';

const contacts: {
  title: string;
  data: {
    name: string;
    phoneNumber: string;
  }[];
}[] = [
  {
    title: 'A',
    data: [
      {name: 'Anh Binh', phoneNumber: '0982887446'},
      {name: 'Anh chu nha', phoneNumber: '0982887447'},
      {name: 'Anh Gia', phoneNumber: '0982887448'},
    ],
  },
  {
    title: 'B',
    data: [
      {name: 'Ba Ngoai', phoneNumber: '0982887449'},
      {name: 'Bac Dinh', phoneNumber: '0982887440'},
      {name: 'Bac Hoan', phoneNumber: '0982887441'},
    ],
  },
  {
    title: 'C',
    data: [
      {name: 'Cau Phuong', phoneNumber: '0982887442'},
      {name: 'Co Kieu Anh', phoneNumber: '0982887443'},
      {name: 'Co Thi', phoneNumber: '0982887444'},
    ],
  },
  {
    title: 'D',
    data: [
      {name: 'Dau', phoneNumber: '0982887445'},
      {name: 'Duy Hieu', phoneNumber: '0982887446'},
      {name: 'Duong Ch', phoneNumber: '0982887447'},
    ],
  },
];

const App = () => {
  return <ListContacts data={contacts}/>;
};

export default App;
