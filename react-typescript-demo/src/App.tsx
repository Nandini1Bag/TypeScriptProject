import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import input from './components/input';
import Input from './components/input';

function App() {
  const fullname={
    first:"John",
    last:"Doe"
  };
  const personlist=[
    {
      first:"John",
      last:"Doe"
    },
    {
      first:"Jane",
      last:"Doe"
    },
    {
      first:"Alice",
      last:"Doe"
    }
  ]
  return (
   <div className="App">
   <Greet name='Nandini' />
   <Person fullname={fullname}/>
   <PersonList people={personlist}/>
   <Status status='Loading'/>
   <Heading>Placeholder text</Heading>
   <Oscar>
    <Heading>Oscar lives in India</Heading>
   </Oscar>
   <Button handleClick={(event,id)=>console.log('button clicked',event,id)}/>
   <Input value='' onChange={(event)=>console.log("input change",event)}/>
    </div>
  );
}

export default App;
