import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './routes/app';

import StandupsIndex from './routes/standups/index';
import StandupsNew from './routes/standups/new';

const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: {component: StandupsIndex},
    childRoutes: [
      {
        path: 'new',
        component: StandupsNew,
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
