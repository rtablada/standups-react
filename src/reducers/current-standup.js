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
}, null);
