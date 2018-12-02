import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Parent from './components/parent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent />
      </div>
    );
  }
}

export default App;
