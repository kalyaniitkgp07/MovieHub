import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/collection/map';

import * as ActionCreators from '../actions';
import AddMovieForm from './AddMovieForm';
import Spinner from './Spinner';
import * as WebUtils from '../utils/webUtils';
import { WebAPIs } from '../constants/WebAPIs';

@connect(
  (state) => ({
    people : state.peoplelist,
    roles : state.rolelist,
    apiResStatus : state.apiResStatus
  }),
  (dispatch) => ({actions: bindActionCreators(ActionCreators, dispatch)})
)
export default class AddMoviePage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchPeople();
    this.props.actions.fetchRoles();
  }

  getFormFileds() {
    return (['title', 'description'].concat(
      map(this.props.roles.rolesById, (role, roleId) => (
        `people.${roleId}.peopleIdList`
      )))
    );
  }

  getPeopleOptions() {
    return (
      map(this.props.people.peopleById, (people, peopleId) => ({
        value : peopleId,
        label : `${people.firstName} ${people.lastName}`
      }))
    );
  }

  render() {
    const { apiResStatus, people, roles } = this.props;
    const apis = [
      WebUtils.getApiStatus(apiResStatus, WebAPIs.PEOPLE_INFO),
      WebUtils.getApiStatus(apiResStatus, WebAPIs.ROLES_INFO),
    ];
    let renderHtml = null;
    if(WebUtils.API_RESPONSE.IS_SUCCESS(...apis)) {
      renderHtml = (
        <AddMovieForm
          fields        = {this.getFormFileds()}
          peopleOptions = {this.getPeopleOptions()}
          rolelist      = {this.props.roles.rolesById}
          addMovie      = {this.props.actions.addMovie}
        />
      );
    } else {
      renderHtml = <Spinner />;
    }
    return (
      <div>
        <br/>
        {renderHtml}
      </div>
    );
  }
}
