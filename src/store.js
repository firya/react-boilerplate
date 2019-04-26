import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = [thunk, promise];

export default createStore(
  reducer,
  applyMiddleware(...middleware)
);