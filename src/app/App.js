import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import Select from './../+showcases/select/Select'
import Topics from './../+showcases/topics/Topics'
import Setup from './../+showcases/setup/Setup'
import { Navbar, NavItem, Nav, Col, Row } from 'react-bootstrap';

import logo from './../assets/logo-white.jpeg';
import background from './../assets/background.jpg';

import './App.css';

class App extends Component {
  
  hasNav () {
    let location = window.location.pathname;
    console.log(location)
    return !['/'].includes(location);
  }

  render() {
    const bg = {
      backgroundImage: 'url(' + background + ')',
      backgroundSize: 'cover'
    }
    console.log(this.props)
    return (
      <div className="App" style={bg}>
        <Row className="brand">
          <Col>
            <img src={logo} className='App-logo' alt='logo'/>
          </Col>
        </Row>
        <Router basename="/meraki-web">
          <div>
            <Navbar>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem>
                    Productos
                  </NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/setup">
                  <NavItem>
                    Recetas
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/setup">
                  <NavItem>
                    Contacto
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
