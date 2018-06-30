import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name:'chandan', age:28 },
      { name:'abhi', age:23 },
      { name:'sukeerthi', age:23 }
    ],
    otherState : 'Some value',
    showPersons : false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons :[
          { name: newName, age:28 },
          { name:'abhi', age:23 },
          { name:'sukeerthi', age:22 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name:'Prabhas', age:28 },
        { name:event.target.value, age:23 },
        { name:'sukeerthi', age:22 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
          <h1> Hi! My name is Chethan</h1>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
          { 
            this.state.showPersons === true ?
            <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
                
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this,'Sunil')}
                  changed={this.nameChangedHandler}> My hobbie : Playing chess </Person>
                
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
            </div> : null
          }
      </div>
    );
    /* return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi! I\'m Chethan Sharma')); */
  }
}

export default App;
