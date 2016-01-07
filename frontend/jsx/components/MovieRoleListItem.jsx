import React from 'react';
import MovieRolePeopleList from './MovieRolePeopleList';

export default class MovieRoleList extends React.Component {

  render() {
    const { roleId, rolePeopleIdList, people, roles } = this.props;
    return (
      <li>
        <h4>{roles[roleId].name}</h4>
        <MovieRolePeopleList
          rolePeopleIdList = {rolePeopleIdList}
          people = {people}
        />
      </li>
    );
  }

}
