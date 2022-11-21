import './App.css';
import PersonFunctional from "./components/PersonFunctional/PersonFunctional"
import PersonClass from './components/PersonClass.jsx/PersonClass';

const person = [
  {
    name: "Mufasa",
    surname: "León",
    age: 25
  },
  {
    name: "Sarabi",
    surname: "Leona",
    age: 22
  },
  {
    name: "Simba",
    surname: "León",
    age: 5
  },
  {
    name: "Nala",
    surname: "Leona",
    age: 5
  },
];

function App() {
  return (
    <div className="App">
    <PersonFunctional person={person[0]}/>
    <PersonFunctional person={person[1]}/>
    <PersonFunctional person={person[2]}/>  
    <PersonFunctional person={person[3]}/>

    <PersonClass person={person[0]}/>
    <PersonClass person={person[1]}/>
    <PersonClass person={person[2]}/>
    <PersonClass person={person[3]}/>

      </div>
    );
  }
  

  export default App;
