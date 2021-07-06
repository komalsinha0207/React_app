import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>By Blah Blah ...</p>
        </header>
        <p className="App-intro">
          
          Finished using the web site?
          Click PROCEED!
          
        </p>
      </div>
    );
  }
}

export default App;
