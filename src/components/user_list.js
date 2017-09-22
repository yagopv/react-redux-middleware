import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="btn btn-primary" target="_blank">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.users
});

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
