import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { createHashHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../utils/promiseMiddleware';
import * as reducers from '../reducers';
import {reducer as formReducer} from 'redux-form';
import Template from './Template';
import MovieDashboardPage from './MovieDashboardPage';
import MoviesInfoPage from './MoviesInfoPage';
import MovieDetailsPage from './MovieDetailsPage';
import AddMoviePage from './AddMoviePage';

const history = createHashHistory()
const combinedReducer = combineReducers({ routing: routeReducer, form: formReducer, ...reducers });
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
            <IndexRoute name="root" component={MovieDashboardPage} />
            <Route name="movies" path="movies" component={MoviesInfoPage} />
            <Route path="movie/:id" component={MovieDetailsPage} />
            <Route name="addmovie" path="addmovie" component={AddMoviePage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}