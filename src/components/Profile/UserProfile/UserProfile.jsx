import React from "react";
import style from "./UserProfile.module.css";
import defaultAvatar from '../../../assets/images/user.png'
import UserStatus from './UserStatus/UserStatus';

const UserProfile = (props) => {
  const avatar = props.user.photos.large ? props.user.photos.large : defaultAvatar;
  return (
    <div className={style.container}>
      <span className={style.avatar_container}>
        <img className={style.avatar} src={ avatar } />
      </span>
      <div className={style.description_container}>
        <h3>{props.user.fullName}</h3>
        {props.user.userId === props.myID
          ? <UserStatus status={props.status} setUserStatus={props.setUserStatus}/>
          : <p>{ props.user.aboutMe }</p>}
      </div>
    </div>
  );
};

export default UserProfile;
