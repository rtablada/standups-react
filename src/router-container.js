import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import App from './routes/app';
import StandupsIndex from './routes/standups/index';
import StandupsNew from './routes/standups/new';
import ActionCreators from './actions/index';

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
    ],
  },
];

class RouterContainer extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routeConfig} />
    );
  }
}

export default RouterContainer;
