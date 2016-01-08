import React, { Component, PropTypes } from 'react';
import map from 'lodash/collection/map';
import MovieListItem from './MovieListItem';

export default class MovieList extends Component {

  static propTypes = {
    movies  : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="panel-group movie-list">
        {
          map(this.props.movies, (movie, id) => {
            return (
              <MovieListItem
                key   = {id}
                movie = {movie}
              />
            );
          })
        }
      </div>
    );
  }

}