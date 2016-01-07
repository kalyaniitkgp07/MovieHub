import React from 'react';
import map from 'lodash/collection/map';
import MovieRolePeopleListItem from './MovieRolePeopleListItem';

export default class MovieRoleList extends React.Component {
  render() {
    const { rolePeopleIdList, people } = this.props;
    return (
      <ul>
        {
          map(rolePeopleIdList, (peopleId) => {
            return (
              <MovieRolePeopleListItem
                key  = {peopleId}
                peopleInfo = {people[peopleId]}
              />
            );
          })
        }
      </ul>
    );
  }
}