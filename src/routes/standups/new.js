import React, { Component } from 'react';
import TeamMemberInput from './components/team-member-input';

class StandupsNew extends Component {
  componentDidMount() {
    this.props.actions.startStandup();
  }

  render() {
    return (
      <div className="container">
        <h2>Standups</h2>

        <table>
          <tbody>
            {this.props.state.currentStandup.teamMembers.map((name) => {
              return (<TeamMemberInput
                teamMember={name}
                registerChild={this.props.actions.standupRegisterInputGather}/>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StandupsNew;
