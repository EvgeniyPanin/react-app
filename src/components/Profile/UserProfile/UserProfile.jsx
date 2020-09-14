import React from "react";
import style from "./UserProfile.module.css";
import defaultAvatar from '../../../assets/images/user.png'
import UserStatus from './UserStatus/UserStatus';
import UploadFile from "../../UI/UploadFile/UploadFile";

const UserProfile = (props) => {
  const avatar = props.user.photos.large ? props.user.photos.large : defaultAvatar;
  const isMyProfile = props.user.userId === props.myID;
  return (
    <div className={style.container}>
      <div className={style.avatar_container}>
        <span className={style.image_container}>
          <img className={style.avatar} src={ avatar } />
        </span>
        {isMyProfile && <UploadFile />}
      </div>
      <div className={style.description_container}>
        <h3 className={style.user_name}>{props.user.fullName}</h3>
        {isMyProfile
          ? <UserStatus status={props.status} setUserStatus={props.setUserStatus}/>
          : <p className={style.status}>{ props.user.aboutMe }</p>}
      </div>
    </div>
  );
};

export default UserProfile;
