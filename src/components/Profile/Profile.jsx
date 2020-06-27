import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
      <div className={style.profile}>
        <Illustration />
        <MyPostsContainer store={props.store}/>
      </div>
    );
}

export default Profile;