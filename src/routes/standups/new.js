import React, { Component } from 'react';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.actions.startStandup();
  }

  render() {
    return (
      <div>
        <h2>Standups</h2>
      </div>
    );
  }
}

export default StandupsNew;
