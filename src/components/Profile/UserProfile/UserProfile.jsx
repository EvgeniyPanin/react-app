import React from "react";
import style from "./UserProfile.module.css";

const UserProfile = (props) => {
  return (
    <div className={style.container}>
      <span className={style.avatar_container}>
        <img className={style.avatar} src={props.user.photos.large} />
      </span>
      <div className={style.description_container}>
        <h3>{props.user.fullName}</h3>
        <p>{props.user.aboutMe}</p>
      </div>
    </div>
  );
};

export default UserProfile;
