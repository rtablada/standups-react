import {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/app';

export default class extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    )
  }
}
