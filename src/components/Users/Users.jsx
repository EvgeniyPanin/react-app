import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

const Users = ({ users, toggleSubscribe, isFollowingFetching }) => {
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
          />
        );
      })}
    </div>
  );
};

export default Users;
