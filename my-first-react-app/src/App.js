import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {id:1, name:'Rajarshee', age:28 },
      {id:2, name:'Bhaskar', age:23 },
      {id:3, name:'Bharath', age:23 }
    ],
    otherState : 'Some value',
    showPersons : false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons });
  }

  deletePersonHandler = (personIndex) => {
    
      //const persons = this.state.persons.splice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
            {this.state.persons.map( (person,index) =>{
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div>
      );
    }
            
    return (
      <div className="App">
          <h1> Hi! My name is Chethan</h1>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons}
      </div>
    );
    /* return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi! I\'m Chethan Sharma')); */
  }
}

export default App;
