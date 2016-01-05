import React, { Component } from 'react';  
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import MovieHub from './MovieHub';  
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
// const store = createStoreWithMiddleware(reducer);

export default class RootComponent extends Component {  
  render() {
    return (
      <div>
        <Provider store={store}>
          <MovieHub />
        </Provider>
      </div>
    );
  }
}