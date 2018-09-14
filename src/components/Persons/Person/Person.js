import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import {AuthContext} from '../../../containers/App';






class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props);
    this.inputElement = React.createRef();

  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
    this.inputElement.current.focus()
  }

  render() {
    console.log('[Person.js] inside render');

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>LOGED IN!!!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click} style={{backgroundColor: '#2ecc71'}}>I'm a {this.props.name} and I am {this.props.age} years old!!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement} 
          type="text" 
          onChange={this.props.change}
          value={this.props.name}/>
        </Aux>
    );
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,

}

export default withClass(Person, classes.Person);