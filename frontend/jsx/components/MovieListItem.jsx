import React, { Component, PropTypes } from 'react';

export default class MovieListItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render () {
    return (
      <li>
        <div>
          <div><span>{this.props.name}</span></div>
          <div><small>{this.props.description}</small></div>
        </div>
      </li>
    );
  }

}