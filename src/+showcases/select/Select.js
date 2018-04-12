import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Select extends Component {

    handleClick () {
        axios.get('http://localhost:8000/user?ID=12345')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        // this.props.history.push('/setup');
    }

    render() {
        return (
            <div>
                <h2>Select</h2>
                <Button onClick={()=>this.handleClick()}> Select </Button>
            </div>
        );
    }
}
export default Select;
