import React from 'react';
import { reduxForm } from 'redux-form';
import map from 'lodash/collection/map';
import RolePeopleInputList from './RolePeopleInputList';

class AddMovieForm extends React.Component {
  handleSubmit(data) {
    this.props.addMovie(data);
  }

  render() {
    const {fields: {title, description, people}, handleSubmit, rolelist, peopleOptions} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))} role="form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Movie Title"
            {...title}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder = "Movie Description"
            rows        = "5"
            {...description}
            className   = "form-control"
            value       = {description.value || ''}
          />
        </div>
        <div className="form-group">
          <RolePeopleInputList
            rolelist={rolelist} 
            peopleOptions={peopleOptions} 
            {...people} 
          />
        </div>
        <button onClick={handleSubmit(this.handleSubmit.bind(this))} type="submit" className="btn btn-default">
          Add Movie
        </button>
      </form>
    );
  }
}

AddMovieForm = reduxForm({ 
  form: 'addMovie',
})(AddMovieForm);

export default AddMovieForm;