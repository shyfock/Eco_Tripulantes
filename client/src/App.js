
import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom'
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
      <div>
        <h1>EcoTripulantes</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/home">Home</Link> |{" "}
          <Link to="/chat">Chat</Link> |{" "}
          <Link to="/publications">Anuncios</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
        <h3>{ this.state.serverResponse }</h3>
        <Outlet/>
      </div>
    );
  }


}

export default App;
