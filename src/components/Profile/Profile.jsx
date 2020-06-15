import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
      <div className={style.profile}>
        <Illustration />
        <MyPosts />
      </div>
    );
}

export default Profile;