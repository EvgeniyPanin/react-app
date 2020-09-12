import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

const Users = ({ users, toggleSubscribe, isFollowingFetching, isAuth }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <User
            avatar={user.photos.small}
            name={user.name}
            toggleSubscribe={toggleSubscribe}
            status={user.status}
            fallowed={user.followed}
            userID={user.id}
            isFollowingFetching={isFollowingFetching}
            isAuth={isAuth}
          />
        );
      })}
    </div>
  );
};

export default Users;
