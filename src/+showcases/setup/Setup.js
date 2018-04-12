import React, { Component } from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render(props) {
        return (
            <div>
              <h2>Setup showcase</h2>
            </div>
        )
    }
}

export default Setup;
