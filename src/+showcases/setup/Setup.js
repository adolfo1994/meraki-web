import React, { Component } from 'react';
import { Col, Form , FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './Setup.css';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      finciteLogos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/showcases/constants/')
    .then(res => {
        const finciteLogos = res.data.fincite_logos;
        var counter = 0;
        var listItems = finciteLogos.map(function(item) {
          return (
            <option value="{item.value}}" key={counter++}>{item.display}</option>
          );
        });
        this.setState({ finciteLogos: listItems });
    })
    .catch(function (error) {
        console.log(error);
    });

    axios.get('http://localhost:3000/api/showcases/configurations/', {params: {is_preset: true }})
    .then(res => {
        const presetConfigurations = res.data;
        var counter = 0;
        var listItems = presetConfigurations.map(function(item) {
          let d = new Date(item.timestamp);
          return (
            <option value="{item.id}}" key={counter++}>{item.company_name} - {d.getFullYear()}-{d.getMonth() + 1}-{d.getDate()}</option>
          );
        });
        this.setState({ presetConfigurations: listItems });
    })
    .catch(function (error) {
        console.log(error);
    });
}

  handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
  }

  render(props) {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="headerColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl id="headerColor" type="text" name="headerColor" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="footerColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl id="footerColor" type="text" name="footerColor" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="accentColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl id="accentColor" type="text" name="accentColor" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="uploadLogo">
              Upload Logo:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl id="uploadLogo" type="text" name="uploadLogo" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="uploadLogo">
              Fincite Logo:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl componentClass="select" placeholder="Select" required>
              {this.state.finciteLogos}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="companyName">
              Company Name:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl id="companyName" type="text" name="companyName" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2} smOffset={2}>
            <ControlLabel htmlFor="uploadLogo">
              Presets:
            </ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl componentClass="select" placeholder="Select">
              {this.state.presetConfigurations}
            </FormControl>
          </Col>
        </FormGroup>
        <Col sm={2} smOffset={2}>
          <Button type="button">Back</Button>
        </Col>
        <Col className="align-right" sm={2} smOffset={4}>
          <Button type="submit">Go!</Button>
        </Col>
      </Form>
    )
  }
}

export default Setup;
