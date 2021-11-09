import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {serverResponse: ""};
  }

  callSERVER() {
    fetch("http://localhost:9000/testSERVER")
      .then(res => res.text())
      .then(res => this.setState({ serverResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callSERVER();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ECO TRIPULANTES</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">{this.state.serverResponse}</p>
      </div>
    );
  }
}

export default App;
