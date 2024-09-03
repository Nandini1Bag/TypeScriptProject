import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
   <Greet name='Nandini' count={20}/>
   <Person fullname={fullname}/>
   <PersonList people={personlist}/>
    </div>
  );
}

export default App;
