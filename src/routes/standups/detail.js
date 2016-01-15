import React, { Component } from 'react';
import TeamMemberInput from './components/team-member-input';

class StandupsDetail extends Component {
  componentDidMount() {
    const {month, day, year} = this.props.params;
    this.props.actions.standupFetchForDate({ month, day, year });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.params.month}/{this.props.params.day}/{this.props.params.year}</h2>

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
      </div>
    );
  }
}

export default StandupsDetail;
