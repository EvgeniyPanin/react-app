import React from 'react';
import User from './User/User';
import style from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
      }
    const userElements = props.users
        .map(user => {
            return < User 
                avatar={ user.avatar } 
                name={ user.name }
                status={ user.status }
                city={ 'user.location.city' }
                country={ 'user.location.country' }
                fallowed={user.fallowed}
                userID={user.id}
                toggleFallow={props.toggleFallow}/>
        })
    return (
        <div className={ style.main }>
            { userElements }
        </div>
    )
}

export default Users;