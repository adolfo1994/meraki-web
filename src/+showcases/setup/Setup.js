import React, { Component } from 'react';
import { Col, Form , FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
  }

  render(props) {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col md={2} mdOffset={2}>
            <ControlLabel htmlFor="headerColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col md={5}>
            <FormControl id="headerColor" type="text" name="headerColor"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col md={2} mdOffset={2}>
            <ControlLabel htmlFor="footerColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col md={5}>
            <FormControl id="footerColor" type="text" name="footerColor"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col md={2} mdOffset={2}>
            <ControlLabel htmlFor="accentColor">
              Insert header Color:
            </ControlLabel>
          </Col>
          <Col md={5}>
            <FormControl id="accentColor" type="text" name="accentColor"/>
          </Col>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default Setup;
