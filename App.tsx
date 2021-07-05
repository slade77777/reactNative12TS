import React from 'react';
import ListContacts from './src/components/ListContacts';


const Contacts = 
[
  {
    title:"A",
    data: [
      {name:"Aanh rina Haro", phoneNumber:"(+84) 2125 1256"}
    ]
  },
  {
    title:"B",
    data: [
      {name:"Ban shina", phoneNumber:"(+84)97 5892 666"},
      {name:"Binh Nguyen", phoneNumber:"(+84)98 966 8759"},
      {name:"Ban Do", phoneNumber:"(+84) 95458 653214"},
    ]
  },
  {
    title:"C",
    data: [
      {name:"Cong Pham", phoneNumber:"(+84) 987 568 6895"},
      {name:"Chinh Ngo", phoneNumber:"(+84) 975 8889 523"},
      {name:"Cam Nguyen", phoneNumber:"(+84) 895 6332 513"},
    ]
  },
  {
    title:"D",
    data: [
      {name:"Dong Pham", phoneNumber:"(+84) 987 568 6895"},
      {name:"Dinh Ngo", phoneNumber:"(+84) 975 8889 523"},

    ]
  },
]; 

//a đã tách component đâu
//A loay hoay mãi ko tách được. nên a dùng luôn loại viết thẳng


const App = () => {
  return (
    <ListContacts ContactBook={Contacts} />
  )
}

export default App;