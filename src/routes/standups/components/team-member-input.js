import React, { Component } from 'react';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.registerChild(this.getInput.bind(this));
  }

  getInput() {
    return {
      teamMember: this.props.teamMember,
      done: this.refs.done.value,
      work: this.refs.work.value,
      help: this.refs.help.value,
    };
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
