import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import './Select.css';

class Select extends Component {
    state = {
        showcases: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/showcases/constants/')
        .then(res => {
            const showcases = res.data.showcases;
            console.log(showcases);
            this.setState({ showcases });
            var counter = 0;
            var listItems = this.state.showcases.map(function(item) {
                return (
                    <option value="{item.value}}" key={counter++}>{item.display}</option>
                );
              });
            const showcasesItems = listItems;
            this.setState({ showcasesItems });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleClick (){
        console.log('click', this.state);
        // this.props.history.push('/setup');
    }

    render() {
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    <h2>Select</h2>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="select">
                            {this.state.showcasesItems}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={()=>this.handleClick()}> Select </Button>
                </Col>
            </Row>
        );
    }
}
export default Select;
