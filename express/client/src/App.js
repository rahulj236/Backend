import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AddUser">
                AddUser
              </Link>
            </li>
            <li>
              <Link to="/About">
                About Us
              </Link>
            </li>
          </ul>

          <Route
            exact
            path="/"
            render={() => <Home />}
          />

          <Route
            exact
            path="/AddUser"
            render={() => <AddUser />}
          />

          <Route
            exact
            path="/About"
            render={() => <About />}
          />

        </Router>
      </div>
    );
  }
}

export default App;
