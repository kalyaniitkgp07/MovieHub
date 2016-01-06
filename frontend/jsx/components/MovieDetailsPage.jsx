import React, {Component, PropTypes} from 'react';

export default class MovieDetailsPage extends Component {
  render() {
    const { params: { id }} = this.props;

    return (
      <div>
        <h2>Child</h2>
        {id && <p>{id}</p>}
      </div>
    );
  }
}