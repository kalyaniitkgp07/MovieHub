import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MoviesActions from '../actions/MoviesActions';
import { MovieList, AddMovieInput } from '../components';

@connect(state => ({movielist: state.movielist}))
export default class MovieHub extends Component {

  static propTypes = {
    movielist: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { movielist: { moviesById }, dispatch } = this.props;
    const actions = bindActionCreators(MoviesActions, dispatch);

    return (
      <div>
        <h1>The MovieList</h1>
        <AddMovieInput addMovie={actions.addMovie} />
        <MovieList movies={moviesById} actions={actions} />
      </div>
    );
  }
}
