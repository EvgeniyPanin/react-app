import React from "react";
import style from "./User.module.css";
import defaultAvatar from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../api/FollowAPI";

const User = (props) => {
  const avatar = props.avatar ? props.avatar : defaultAvatar;
  return (
    <div className={style.container}>
      <span className={style.avatar__container}>
        <NavLink to={`/profile/${props.userID}`}>
          <img className={style.avatar} src={avatar} alt="#" />
        </NavLink>
      </span>
      <div className={style.description__container}>
        <h2 className={style.name}>{props.name}</h2>
        <p className={style.status}>{props.status}</p>
        <span
          className={style.location}
        >{`${props.city}, ${props.country}`}</span>
      </div>
      <button
        disabled={ props.isFollowingFetching.some(id => id === props.userID) }
        onClick={() => {;
          if (props.fallowed) {
            props.unfollow(props.userID)
          } else {
            props.follow(props.userID)
          }
        }}
        className={props.isFollowingFetching.some(id => id === props.userID)
          ? `${style.button} ${style.button_disabled}` 
          : style.button }
      >
        {props.fallowed ? "Отписаться" : "Подписаться"}
      </button>
    </div>
  );
};

export default User;
