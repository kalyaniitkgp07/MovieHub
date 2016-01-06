import React, { Component } from 'react';  
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import promiseMiddleware from 'redux-promise-middleware';

import MovieHub from './MovieHub';
import * as reducers from '../reducers';
import {fetchMovies} from '../actions/WebAPIs';

const reducer = combineReducers(reducers);
// const store = createStore(reducer);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(fetchMovies()).then(() =>
  console.log(store.getState())
)

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