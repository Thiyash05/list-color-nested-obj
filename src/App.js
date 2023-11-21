import logo from './logo.svg';
import './App.css';
import List from './List'
import Create from './Class';
import Employee from './Iteratelist';
import { useState } from 'react';

function App() {

const [text , setText]=useState("Black")

const clicktext=()=>{
  setText("Yellow")
}


  const fruit=[
    {
      name:'Apple',
      color:'Red',
      price:20
    },
    {
      name:'Orange',
      color:'Orange',
      price:40
    },
    {
      name:'Mango',
      color:'Yellow',
      price:60
    },
    {
      name:'Grapes',
      color:'Green',
      price:20
    },
  ]

  const person=[
    {
      name:"Raj",
      age:21,
      profession:"Desiginer"
    },

    {
      name:"Madhan",
      age:24,
      profession:"Coder"
    },

    {
      name:"Santhiya",
      age:20,
      profession:"Desiginer"
    },

    {
      name:"Arun",
      age:25,
      profession:"Desiginer"
    }
  ]


  const employee=[
    {
    name:"Alex",
    skills:[
          {name:"ReactJS", type:"Frontend"},
          {name:"nodeJS", type:"Backend"}
          ]
    },

    {
    name:"Anna",
    skills:[
          {name:"Angular", type:"Frontend"},
          {name:"Python", type:"Backend"}
          ]
  
    }
    ]

    



  return (
    <div className="App">
      <h3>{text}</h3>
      <button onClick={clicktext}>Click</button>
        
        <List fruitDetail={fruit}/>
        
        <Create data={person} />

        <Employee employeeDetail={employee} />

        

    </div>
  );
}

export default App;
