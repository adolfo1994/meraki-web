import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select from './../+showcases/select/Select'
import Topics from './../+showcases/topics/Topics'
import Setup from './../+showcases/setup/Setup'

import logo from './../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className='App-logo' alt='logo'/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Select Showcase</Link>
              </li>
              <li>
                <Link to="/setup">Setup Showcase</Link>
              </li>
            </ul>
            <hr />

            <Route exact path="/" component={Select} />
            <Route path="/setup" component={Setup} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;