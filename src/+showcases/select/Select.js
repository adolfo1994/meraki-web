import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div>
                <h2>Select</h2>
                <button onClick={()=> {this.props.history.push('/setup')}}> Select </button>
            </div>
        );
    }
}
export default Select;
