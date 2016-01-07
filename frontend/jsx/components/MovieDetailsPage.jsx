import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import { WebAPIs } from '../constants/WebAPIs';
import * as WebUtils from '../utils/webUtils';
import PerMovieContainer from './PerMovieContainer';
import Spinner from './Spinner';

@connect(
  (state, props) => ({
    movie : state.movielist.movies.indexOf(props.params.id) >= 0
            ? state.movielist.moviesById[props.params.id]
            : {},
    people : state.peoplelist,
    roles : state.rolelist,
    apiResStatus : state.apiResStatus
  }),
  (dispatch) => ({actions : bindActionCreators(ActionCreators, dispatch)})
)
export default class MovieDetailsPage extends Component {
  
  componentDidMount() {
    this.props.actions.fetchPeople();
    this.props.actions.fetchRoles();
    this.props.actions.fetchMovieDetails(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if(this.props.params.id != prevProps.params.id) {
      this.props.actions.fetchMovieDetails(this.props.params.id);
    }
  }

  isRequiredApisSuccess() {
    const apis = [
      WebUtils.getApiStatus(this.props.apiResStatus, WebAPIs.PEOPLE_INFO),
      WebUtils.getApiStatus(this.props.apiResStatus, WebAPIs.ROLES_INFO),
      WebUtils.getApiStatus(this.props.apiResStatus, WebAPIs.MOVIE_DETAILS(this.props.params.id))
    ];
    return WebUtils.API_RESPONSE.IS_SUCCESS(...apis);
  }

  render() {
    let renderHtml = null;
    if(this.isRequiredApisSuccess()) {
      renderHtml = (
        <PerMovieContainer 
          movie = {this.props.movie}
          people = {this.props.people.peopleById}
          roles = {this.props.roles.rolesById}
        />
      );
    } else {
      renderHtml = <Spinner />;
    }
    return (
      <div>
        {renderHtml}
      </div>
    );
  }
}