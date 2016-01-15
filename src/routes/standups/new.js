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
    return (
      <form className="container" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Standups</h2>

        <table>
          <tbody>
            {this.props.state.currentStandup.teamMembers.map((name, index) => {
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
