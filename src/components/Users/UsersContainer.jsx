import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import style from "./Users.module.css";
import {
  updateCurrentPage,
  setPortionNumber,
  getUsers,
  toggleSubscribe,
} from "../../redux/users-reducer";
import Preloader from "../UI/Preloader/Preloader";
import { compose } from "redux";
import {
  selectUsers,
  selectCurrentPage,
  selectPortionNumber,
  selectTotalUsersCount,
  selectPageSize,
  selectIsFollowingFetching,
  selectIsFetching,
} from "../../redux/users-selectors";
import Paginator from "../UI/Paginator/Paginator";
import { selectIsAuth } from "../../redux/auth-selectors";

class UsersContainer extends React.Component {
  render = () => {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      toggleSubscribe,
      isFollowingFetching,
      portionNumber,
      setPortionNumber,
      isAuth
    } = this.props;

    const pagination = (
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        togglePages={this.togglePages}
        currentPage={currentPage}
        portionNumber={portionNumber}
        portionLength={10}
        setPortionNumber={setPortionNumber}
      />
    );
    return (
      <>
        {pagination}
        {isFetching ? (
          <Preloader />
        ) : (
          <div>
            <Users
              users={users}
              toggleSubscribe={toggleSubscribe}
              isFollowingFetching={isFollowingFetching}
              isAuth={isAuth}
            />
          </div>
        )}
      </>
    );
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }

  togglePages = (evt) => {
    const newCurrentPage = +evt.target.textContent;
    this.props.updateCurrentPage(newCurrentPage);
    this.props.getUsers(newCurrentPage);
  };
}

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state),
    currentPage: selectCurrentPage(state),
    portionNumber: selectPortionNumber(state),
    totalUsersCount: selectTotalUsersCount(state),
    pageSize: selectPageSize(state),
    isFollowingFetching: selectIsFollowingFetching(state),
    isFetching: selectIsFetching(state),
    isAuth: selectIsAuth(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    updateCurrentPage,
    setPortionNumber,
    getUsers,
    toggleSubscribe,
  })
)(UsersContainer);
