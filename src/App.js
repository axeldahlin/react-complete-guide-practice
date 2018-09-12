import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asddas', name: 'Max', age: 28},
      {id: 'asdasda', name: 'Manu', age: 29 },
      {id: '3242d', name: 'Axel', age: 1000000}
    ],
    showPersons: false,

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
    console.log('hey')

  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  personsToogleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              change={(event) => this.changeNameHandler(event, person.id)}
              />
          })}
      </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2 ) {
      classes.push('bold');
    }

    if (this.state.persons.length <= 1 ) {
      classes.push('red');
    }

    return (
  
        <div className="App">
          <h1>Hi I am a react App</h1>
          <p className={classes.join(' ')}>And this is a paragraph</p>
          <button style={style} onClick={this.personsToogleHandler}>Switch Name</button>
          {persons}
        </div>
    
    );
  }
}

export default App;
