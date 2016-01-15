import history from '../../history-store';
import moment from 'moment';

export default (standup) => {
  const date = moment(standup.date);
  history.pushState(null, `/standup/${date.format('MM/DD/YY')}`);

  return {
    type: 'STANDUP_SAVED',
    standup,
  };
};
