import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import Select from './../+showcases/select/Select'
import Topics from './../+showcases/topics/Topics'
import Setup from './../+showcases/setup/Setup'
import { Navbar, NavItem, Nav, Col } from 'react-bootstrap';

import logo from './../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <img src={logo} className='App-logo' alt='logo'/>
            </Navbar.Brand>
            </Navbar.Header>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem>
                    Select Showcase
                  </NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/setup">
                  <NavItem>
                    Setup Showcase
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>

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