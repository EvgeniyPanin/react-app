import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  toggleFallow,
  updateCurrentPage,
  toggleFollowingFetching,
  getUsers,
  follow,
  unfollow
} from "../../redux/users-reducer";
import User from "./User/User";
import style from "./Users.module.css";
import Preloader from "../UI/Preloader/Preloader";

class UsersContainer extends React.Component {
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          createUsersArr={this.createUsersArr}
          createPagesList={this.createPagesList}
          togglePages={this.togglePages}
          isFetching={this.props.isFetching}
        />
      </>
    );
  };

  componentDidMount() {
    this.props.getUsers(this.props.currenPage);
  }

  togglePages = (evt) => {
    const newCurrentPage = +evt.target.textContent;
    this.props.updateCurrentPage(newCurrentPage);
    this.props.getUsers(newCurrentPage);
  };

  createUsersArr = () => {
    return this.props.users.map((user) => {
      return (
        <User
          avatar={user.photos.small}
          name={user.name}
          status={user.status}
          city={"user.location.city"}
          country={"user.location.country"}
          fallowed={user.followed}
          userID={user.id}
          toggleFallow={this.props.toggleFallow}
          isFollowingFetching={this.props.isFollowingFetching}
          toggleFollowingFetching={this.props.toggleFollowingFetching}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
    isFollowingFetching: state.usersPage.isFollowingFetching,
  };
};

export default connect(mapStateToProps, {
  toggleFallow,
  updateCurrentPage,
  toggleFollowingFetching,
  getUsers,
  follow,
  unfollow
})(UsersContainer);
