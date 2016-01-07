import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, Route } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { createHashHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../utils/promiseMiddleware';
import * as reducers from '../reducers';
import Template from './Template';
import MoviesInfoPage from './MoviesInfoPage';
import MovieDetailsPage from './MovieDetailsPage';
import AddMoviePage from './AddMoviePage';

const history = createHashHistory()
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
            <Route path="movies" component={MoviesInfoPage} />
            <Route path="movie/:id" component={MovieDetailsPage} />
            <Route path="addmovie" component={AddMoviePage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}