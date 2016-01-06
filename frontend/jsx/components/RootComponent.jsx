import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MovieHub from './MovieHub';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../utils/promiseMiddleware';
import * as reducers from '../reducers';

const combinedReducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )(createStore);
const appStore = createStoreWithMiddleware(combinedReducer);

export default class RootComponent extends Component {  
  render() {
    return (
      <div>
        <Provider store={appStore}>
          <MovieHub />
        </Provider>
      </div>
    );
  }
}