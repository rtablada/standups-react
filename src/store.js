import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
import initialState from './states/initial';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default finalCreateStore(appReducer, initialState);
