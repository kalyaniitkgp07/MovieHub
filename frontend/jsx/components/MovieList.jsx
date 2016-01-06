import React, { Component, PropTypes } from 'react';
import map from 'lodash/collection/map';
import MovieListItem from './MovieListItem';

export default class MovieList extends Component {

  static propTypes = {
    movies  : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.fetchMovies();
  }

  render () {
    return (
      <ul>
        {
          map(this.props.movies, (movie, id) => {
            return (
              <MovieListItem
                key  = {id}
                id   = {id}
                name = {movie.title}
                description = {movie.description}
              />
            );
          })
        }
      </ul>
    );
  }

}