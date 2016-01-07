import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AddMovieActions from '../actions/AddMovieActions';

@connect(
  (state) => ({movielist: state.movielist}),
  (dispatch) => ({actions: bindActionCreators(AddMovieActions, dispatch)})
)
export default class AddMoviePage extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <button onClick={() => this.props.actions.addMovie()}>Click to add movie</button>
      </div>
    );
  }
}
