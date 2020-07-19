import React from "react";
import style from "./UserProfile.module.css";

const UserProfile = (props) => {
  // debugger
  return (
    <div className={style.container}>
      <span className={style.avatar_container}>
        <img className={style.avatar} src={props.user.photos.large} />
      </span>
      <h3 className={style.name}>{props.user.fullName}</h3>
    </div>
  );
};

export default UserProfile;
