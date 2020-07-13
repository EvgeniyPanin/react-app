import React from 'react';
import User from './User/User';
import style from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    // this.getUsers();
  }

  render = () => {
    const userElements = this.createUsersArr();
    return (
        <div className={ style.main }>
            { userElements }
        </div>
    )
  }

  getUsers = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  createUsersArr = () => {
    return this.props.users
        .map(user => {
            return < User 
                avatar={ user.avatar } 
                name={ user.name }
                status={ user.status }
                city={ 'user.location.city' }
                country={ 'user.location.country' }
                fallowed={user.fallowed}
                userID={user.id}
                toggleFallow={this.props.toggleFallow}/>
        })
  }
}

export default Users;