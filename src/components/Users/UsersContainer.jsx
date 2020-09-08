import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  updateCurrentPage,
  getUsers,
  toggleSubscribe,
} from "../../redux/users-reducer";
import Preloader from "../UI/Preloader/Preloader";
import { compose } from "redux";
import {
  selectUsers,
  selectCurrentPage,
  selectTotalUsersCount,
  selectPageSize,
  selectIsFollowingFetching,
  selectIsFetching,
} from "../../redux/users-selectors";
import Paginator from "../UI/Paginator/Paginator";

class UsersContainer extends React.Component {
  render = () => {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      togglePages,
      currentPage,
      users,
      toggleSubscribe,
      isFollowingFetching,
    } = this.props;

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <div>
            <Paginator
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              togglePages={this.togglePages}
              currentPage={currentPage}
            />
            <Users
              users={users}
              toggleSubscribe={toggleSubscribe}
              isFollowingFetching={isFollowingFetching}
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
    totalUsersCount: selectTotalUsersCount(state),
    pageSize: selectPageSize(state),
    isFollowingFetching: selectIsFollowingFetching(state),
    isFetching: selectIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, { updateCurrentPage, getUsers, toggleSubscribe })
)(UsersContainer);
