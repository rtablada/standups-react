import React, { Component } from 'react';
import TeamMemberInput from './components/team-member-input';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.actions.startStandup();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.submitStandup();
  }

  render() {
    const {teamMembers} = this.props.state.currentStandup;
    return (
      <form className="container" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Standups</h2>

        <table>
          <thead>
            <tr className="flexi-row">
              <th></th>
              <th>Done</th>
              <th>Next</th>
              <th>Help</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((name, index) => {
              return (<TeamMemberInput key={index}
                teamMember={name}
                registerChild={this.props.actions.standupRegisterInputGather}/>);
            })}
          </tbody>
        </table>

        <button>Submit</button>
      </form>
    );
  }
}

export default StandupsNew;
