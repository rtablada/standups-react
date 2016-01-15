import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from './history-store';

import App from './routes/app';
import ActionCreators from './actions/index';

import StandupsIndex from './routes/standups/index';
import StandupsNew from './routes/standups/new';
import StandupDetail from './routes/standups/detail';

function mapStateToProps(state) {
  return {state};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

const stateConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const routeConfig = [
  {
    path: '/',
    component: stateConnect(App),
    indexRoute: {component: stateConnect(StandupsIndex)},
    childRoutes: [
      {
        path: 'new',
        component: stateConnect(StandupsNew),
      },
      {
        path: 'standup/:month/:day/:year',
        component: stateConnect(StandupDetail),
      },
    ],
  },
];

class RouterContainer extends Component {
  render() {
    return (
      <Router history={history} routes={routeConfig} />
    );
  }
}

export default RouterContainer;
