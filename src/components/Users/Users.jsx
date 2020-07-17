import React from "react";
import User from "./User/User";
import style from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  render = () => {
    const userElements = this.createUsersArr();
    const pagesList = this.createPagesList();
    return (
      <div className={style.main}>
        <nav
          className={style.nav}
          onClick={(evt) => {
            this.togglePages(evt);
          }}
        >
          {pagesList}
        </nav>
        {userElements}
      </div>
    );
  };

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  togglePages = (evt) => {
    const newCurrentPage = +evt.target.textContent;
    this.props.updateCurrentPage(newCurrentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}`
      )
      .then((response) => {
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

export default Users;
