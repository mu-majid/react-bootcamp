import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log(err));
  }

  render() {
    const renderedMonsters = this.state.monsters.map(m => <h1 key={m.id} >{m.name}</h1>)
    return (
      <div className='APP'>

        <CardList>
          {renderedMonsters}
        </CardList>
      </div>
    )
  }
}

export default App;
