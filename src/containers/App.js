import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext();

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        {id: 'asddas', name: 'Max', age: 28},
        {id: 'asdasda', name: 'Manu', age: 29 },
        {id: '3242d', name: 'Axel', age: 1000000}
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    }
  }

  loginHandler = () => {
    this.setState({authenticated: true});

  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside component shouldComponentUpdate', nextProps, nextState);
  //   return nextState.person !== this.state.persons ||
  //   nextState.showPersons !== this.state.persons;
  // }

  componentWillUpdate() {
    console.log('[UPDATE App.js] Inside component componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside component componentDidUpdate');
  }


  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
  }

  render() {
    console.log('[App.js] inside render');

    let persons = '';
    if (this.state.showPersons) {
      persons = 
        <Persons 
          changed={this.changeNameHandler}
          clicked={this.deletePersonHandler}
          persons={this.state.persons}
       />
    }
    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})} }>Show persons</button>
        <h1>{this.props.testProps}</h1>
        <Cockpit 
          persons={this.state.persons}
          clicked={this.personsToogleHandler}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          />
          
        <AuthContext.Provider value={this.state.isAuthenticated}>{persons}</AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
