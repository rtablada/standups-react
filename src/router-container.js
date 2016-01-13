import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './routes/app';

class RouterContainer extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    )
  }
}

export default RouterContainer;
