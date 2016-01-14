import React from 'react';
import { render } from 'react-dom';
import RouterContainer from './router-container';
import { Provider } from 'react-redux';
import store from './store';
import actions from './actions/index';

render((
  <Provider store={store} actions={actions}>
    <RouterContainer />
  </Provider>
), document.getElementById('root'));
