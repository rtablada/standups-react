import React, { Component } from 'react';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.registerChild(this.getInput.bind(this));
  }

  getInput() {
    console.log(this.refs.done, this.refs.work, this.refs.help);
  }

  render() {
    return (
      <tr>
        <td>{this.props.teamMember}</td>
        <td><input type="text" ref="done" placeholder="Done" /></td>
        <td><input type="text" ref="work" placeholder="Needs Work" /></td>
        <td><input type="text" ref="help" placeholder="Needs Help" /></td>
      </tr>
    );
  }
}

export default StandupsNew;
