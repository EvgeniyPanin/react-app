import React from "react";
import style from "./User.module.css";
import defaultAvatar from "../../../assets/images/user.png";
import * as axios from "axios";
import { NavLink } from "react-router-dom";

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
        onClick={() => {
          if (props.fallowed) {
            axios
            .delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${props.userID}`, {
                withCredentials: true,
                headers: {
                  "API-KEY": '727c92a5-5e8f-4915-b4a2-a82f90582417'
                }
              }
            )
            .then((response) => {
                if (response.data.resultCode == 0) props.toggleFallow(props.userID);
            })
          } else {
            axios
            .post(
              `https://social-network.samuraijs.com/api/1.0/follow/${props.userID}`, {}, {
                withCredentials: true,
                headers: {
                  "API-KEY": '727c92a5-5e8f-4915-b4a2-a82f90582417'
                }
              }
            )
            .then((response) => {
                if (response.data.resultCode == 0) props.toggleFallow(props.userID)
            })
          }
        }}
        className={style.button}
      >
        {props.fallowed ? "Отписаться" : "Подписаться"}
      </button>
    </div>
  );
};

export default User;
