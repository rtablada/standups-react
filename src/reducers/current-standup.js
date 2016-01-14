import {combineReducers} from 'redux';
import _ from 'lodash';

export default combineReducers({
  teamMembers(state = [], action = {}) {
    switch (action.type) {
      case 'RANDOMIZE_TEAM':
        return _.shuffle(action.teamMembers);
      default:
        return state;
    }
  },

  inputGatherers(state = [], action = {}) {
    switch (action.type) {
      case 'STANDUP_START':
        return [];
      case 'REGISTER_INPUT_GATHERER':
        return [...state, action.callback];
      default:
        return state;
    }
  },
}, null);
