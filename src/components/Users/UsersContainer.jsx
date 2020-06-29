import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {toggleFallowedAC, setUsersAC} from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFallow: (userID) => {
            dispatch(toggleFallowedAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);