import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MoviesActions from '../actions/MoviesActions';
import { MovieList, AddMovieInput } from '../components';

@connect(
  (state) => ({movielist: state.movielist}),
  (dispatch) => ({actions: bindActionCreators(MoviesActions, dispatch)})
)
export default class MoviesInfoPage extends Component {

  static propTypes = {
    movielist: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.fetchMovies();
  }

  render () {
    const { movielist: { moviesById }, actions } = this.props;

    return (
      <div className="movies-page-wrapper">
        <MovieList movies={moviesById} actions={actions} />
      </div>
    );
  }
}
