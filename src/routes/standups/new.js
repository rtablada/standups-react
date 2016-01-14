import React, { Component } from 'react';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.actions.startStandup();
  }

  render() {
    return (
      <div>
        <h2>Standups</h2>

        {this.props.state.currentStandup.teamMembers.map((name) => {
          return <li>{name}</li>;
        })}
      </div>
    );
  }
}

export default StandupsNew;
