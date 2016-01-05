import React, { Component, PropTypes } from 'react';
import map from 'lodash/collection/map';

// import styles from './MovieList.css';
import MovieListItem from './MovieListItem';

export default class MovieList extends Component {

  static propTypes = {
    movies  : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired
  }

  // componentDidMount() {
  //   this.props.actions.fetchMoviesInfo();
  // }

  render () {
    return (
      <ul>
        {
          map(this.props.movies, (movie) => {
            return (
              <MovieListItem
                key  = {movie.id}
                id   = {movie.id}
                name = {movie.name}
              />
            );
          })
        }
      </ul>
    );
  }

}