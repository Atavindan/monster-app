
import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.components'

import { SearchBox } from  './components/search-field/search-field'

class App extends Component {

constructor() {
  super(); 

  this.state = {
      monster: [],
      searchField:''
  };

  
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monster:users}));
  
}

handel = (e) => {
  this.setState({searchField:e.target.value})
}

  render() {
const { monster, searchField } = this.state;
const filteredmonsters = monster.filter(monstered => monstered.name.toLowerCase().includes(searchField.toLocaleLowerCase()) )

    return (
      <div className="App">
      <h1>Master App</h1>
      <SearchBox 
        placeholder='search monster'
        handlechange = {this.handel}
      />
      <CardList monster={filteredmonsters} />
     
    </div>
    )
  }
}


export default App;
