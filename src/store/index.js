import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../common/reducers';

const enhancers = [];
const middleware = [
  thunk,
];

const devToolsExtension = window.devToolsExtension;

if (devToolsExtension) {
  enhancers.push(devToolsExtension());
}

const initialState = {};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
