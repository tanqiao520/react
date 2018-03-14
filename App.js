import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到谈桥的React项目</h1>
        </div>
        <div className="header">
            <h1>欢迎学习交流</h1>
        </div>
        <i></i>
      </div>

    );
  }
} 
export default App;
