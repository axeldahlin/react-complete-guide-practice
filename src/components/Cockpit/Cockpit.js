import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  let AsignedClasses = [''];
  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.red);
  }



  if (props.persons.length <= 2 ) {
    AsignedClasses.push(classes.bold);
  }

  if (props.persons.length <= 1 ) {
    AsignedClasses.push(classes.red);
  }


  return (
    <Aux>
      <h1>Hi I am a react App</h1>
      <p className={AsignedClasses.join(' ')}>And this is a paragraph</p>
      <button 
        className={btnClass.join(' ')}
        onClick={props.clicked}>Switch Name</button>
        <button onClick={props.login}>Log In</button>
    </Aux>
    );
};


export default cockpit;