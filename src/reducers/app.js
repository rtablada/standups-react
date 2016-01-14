import {combineReducers} from 'redux';
import currentStandup from './current-standup';

export default combineReducers({
  teamMembers(store = []) {return store;},

  currentStandup,
});
