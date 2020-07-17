import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {toggleFallowedAC, setUsersAC, updateCurrentPageAC, toggleFetchedAC} from '../../redux/users-reducer';
import User from './User/User';
import * as axios from "axios";
import style from "./Users.module.css";
import Preloader from "../UI/Preloader/Preloader";


class UsersContainer extends React.Component {
    render = () => {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users createUsersArr={this.createUsersArr}
      createPagesList={this.createPagesList}
      togglePages={this.togglePages}
      isFetching={this.props.isFetching}
        />
    </>
    };
  
    componentDidMount() {
        this.props.toggleIsFetched(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
        )
        .then((response) => {
            this.props.toggleIsFetched(false);
            this.props.setUsers(response.data.items);
        });
    }
  
    togglePages = (evt) => {
      const newCurrentPage = +evt.target.textContent;
      this.props.updateCurrentPage(newCurrentPage);
      this.props.toggleIsFetched(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}`
        )
        .then((response) => {
            this.props.toggleIsFetched(false);
            this.props.setUsers(response.data.items);
        });
    };
  
    createUsersArr = () => {
      return this.props.users.map((user) => {
        return (
          <User
            avatar={user.avatar}
            name={user.name}
            status={user.status}
            city={"user.location.city"}
            country={"user.location.country"}
            fallowed={user.fallowed}
            userID={user.id}
            toggleFallow={this.props.toggleFallow}
          />
        );
      });
    };
  
    createPagesList = () => {
      const length = this.props.totalUsersCount / this.props.pageSize;
      const pagesList = [];
      for (let i = 1; i <= length; i++) {
        pagesList.push(i);
      }
      return pagesList.map((item) => {
        const itemClass =
          item === this.props.currentPage ? style.item_active : style.item;
        return <span className={itemClass}>{item}</span>;
      });
    };
  }

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        toggleIsFetched: (state) => {
            dispatch(toggleFetchedAC(state));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);