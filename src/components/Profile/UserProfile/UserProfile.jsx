import React from "react";
import style from "./UserProfile.module.css";
import defaultAvatar from '../../../assets/images/user.png'
import ProfileStatus from './UserStatus';

const UserProfile = (props) => {
  const avatar = props.user.photos.large ? props.user.photos.large : defaultAvatar;
  return (
    <div className={style.container}>
      <span className={style.avatar_container}>
        <img className={style.avatar} src={ avatar } />
      </span>
      <div className={style.description_container}>
        <h3>{props.user.fullName}</h3>
        <ProfileStatus aboutMe={ props.user.aboutMe }/>
      </div>
    </div>
  );
};

export default UserProfile;
