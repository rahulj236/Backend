import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Filterstudents from './components/filterStudents/filterStudents';

class App extends Component {


  render() {
    return (
      <div className="App">

        <SearchBar/>
        <Filterstudents />

      </div>
    );
  }
}

export default App;



