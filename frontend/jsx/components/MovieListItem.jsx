import React, { Component, PropTypes } from 'react';

export default class MovieListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }

  render () {
    return (
      <li>
        <div>
          <div><span>{this.props.name}</span></div>
          <div><small>xx movies in common</small></div>
        </div>
      </li>
    );
  }

}