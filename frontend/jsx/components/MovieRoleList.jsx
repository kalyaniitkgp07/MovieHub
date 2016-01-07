import React from 'react';
import map from 'lodash/collection/map';
import MovieRoleListItem from './MovieRoleListItem';

export default class MovieRoleList extends React.Component {
  render() {
    const { movie, people, roles } = this.props;
    return (
      <ul>
        {
          map(movie.people, (rolePeople, roleId) => {
            return (
              <MovieRoleListItem
                key  = {roleId}
                rolePeopleIdList = {rolePeople.peopleIdList}
                roleId = {roleId}
                {...this.props}
              />
            );
          })
        }
      </ul>
    );
  }
}