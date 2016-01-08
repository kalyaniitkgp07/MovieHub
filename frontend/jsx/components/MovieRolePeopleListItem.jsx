import React from 'react';

export default class MovieRolePeopleListItem extends React.Component {
  render() {
    const { peopleInfo } = this.props;
    return (
      <li className="list-group-item">
        {`${peopleInfo.firstName} ${peopleInfo.lastName}`}
      </li>
    );
  }
}
