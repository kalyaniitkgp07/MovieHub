import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, Route } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../utils/promiseMiddleware';
import * as reducers from '../reducers';
import MovieHub from './MovieHub';
import Template from './Template';
import MovieDetailsPage from './MovieDetailsPage';

const history = createHistory()
const combinedReducer = combineReducers({ routing: routeReducer, ...reducers });
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )(createStore);
const appStore = createStoreWithMiddleware(combinedReducer);

syncReduxAndRouter(history, appStore);

export default class RootComponent extends Component {  
  render() {
    return (
      <Provider store={appStore}>
        <Router history={history}>
          <Route path="/" component={Template}>
            <Route path="movies" component={MovieHub} />
            <Route path="movie/:id" component={MovieDetailsPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}