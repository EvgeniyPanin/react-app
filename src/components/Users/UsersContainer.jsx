import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {toggleFallowedAC, setUsersAC, updateCurrentPageAC} from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFallow: (userID) => {
            dispatch(toggleFallowedAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        updateCurrentPage: (newCurrentPage) => {
            dispatch(updateCurrentPageAC(newCurrentPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);