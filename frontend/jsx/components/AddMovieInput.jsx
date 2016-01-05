import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class AddMovieInput extends Component {
  static propTypes = {
    addMovie: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        placeholder="Type the name of a movie"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addMovie(name);
      this.setState({ name: '' });
    }
  }

}