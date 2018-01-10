import { createStore, applyMiddleware, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';

// import all reducer modules to combine here
import home from './reducers/home';
import common from './reducers/common';
import auth from './reducers/auth';

const reducer = combineReducers({
  auth,
  common,
  home
})

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;